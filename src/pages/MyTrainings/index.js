import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';

import { format, parseJSON } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import api from '~/services/api';

import TrainingFlatlist from '~/components/TrainingFlatlist';

import ListSequence from '~/Animation/ListSequence';
import Loading from '~/components/Loading';

import { Container, Content } from './styles';

export default function Trainings() {
  const isFocused = useIsFocused();
  const { id } = useSelector(state => state.auth.student);
  const [trainings, setTrainings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getTrainings() {
      const response = await api.get(`trainingsbetweenDates/${id}`);

      const trainingsFormatted = response.data.map(training => {
        if (training.date) {
          const dateFormatted = format(parseJSON(training.date), 'E dd MMM', {
            locale: ptBR,
          });
          const dateFormattedComplete = format(
            parseJSON(training.date),
            "EEEE', ' dd 'de' MMMM",
            {
              locale: ptBR,
            },
          );

          const firstName = training.student.name.split(' ');

          return {
            ...training,
            dateFormatted,
            dateFormattedComplete,
            firstName: firstName[0],
          };
        }
        const firstName = training.student.name.split(' ');
        return {
          ...training,

          firstName: firstName[0],
        };
      });
      setTrainings(trainingsFormatted);

      setLoading(false);
    }
    if (isFocused) {
      setLoading(true);
      getTrainings();
    }
  }, [isFocused]);

  return isFocused && loading ? (
    <Loading />
  ) : (
    <Container>
      <>
        <Content>
          <ListSequence>
            <TrainingFlatlist trainings={trainings} />
          </ListSequence>
        </Content>
      </>
    </Container>
  );
}
