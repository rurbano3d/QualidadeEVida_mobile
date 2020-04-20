import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';

import api from '~/services/api';

import { challengeRequest } from '~/store/modules/challenges/actions';

import Separator from '~/components/Separator';
import SlideRight from '~/Animation/SlideRight';
import GrowUp from '~/Animation/GrowUp';
import Loading from '~/components/Loading';

import ExercisesFlatlist from '~/pages/ExercisesFlatList';

import { Container, ButtonCustom, Title, TitleText } from './styles';

export default function Exercises({ renderButtonSeries, ButtonRender }) {
  const route = useRoute();
  const dispatch = useDispatch();

  const { id, title } = route.params;
  const student = useSelector(state => state.auth.student);

  const [refresh, setRefresh] = useState(false);
  const [exercises, setExercises] = useState([]);
  const [runnings, setRunnings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getExercises() {
      const response = await api.get('exercises', {
        params: { category_id: id },
      });
      const runningsResponse = await api.get('runnings', {
        params: { category_id: id },
      });
      setExercises(response.data);
      setRunnings(runningsResponse.data);
      setLoading(false);
    }
    getExercises();
  }, []);

  function handleSubscription() {
    dispatch(challengeRequest(student.id, id));
    setRefresh(true);
  }
  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <>
          <SlideRight>
            <Title>
              <TitleText>{title}</TitleText>
            </Title>
            {exercises.length > 0 && (
              <ExercisesFlatlist
                data={exercises}
                category={id}
                renderButtonSeries={renderButtonSeries}
                type="exercises"
              />
            )}
            {runnings.length > 0 && (
              <ExercisesFlatlist
                data={runnings}
                category={id}
                renderButtonSeries={renderButtonSeries}
                type="runnings"
              />
            )}
          </SlideRight>
          {ButtonRender && (
            <>
              <Separator />

              <GrowUp>
                {!refresh && (
                  <ButtonCustom
                    color="#42CB59"
                    onPress={() => handleSubscription(id)}
                  >
                    Inscrever-se
                  </ButtonCustom>
                )}
              </GrowUp>
            </>
          )}
        </>
      )}
    </Container>
  );
}
