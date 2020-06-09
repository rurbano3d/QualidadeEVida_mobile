import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { useSelector } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';

import api from '~/services/api';

import { formatDateParse } from '~/utils';
import Warning from '~/components/WarningWithoutInfo';
import ListSequence from '~/Animation/ListSequence';

import { Container, List, Row, Column, Title, Item } from './styles';

export default function Evaluation() {
  const student = useSelector(state => state.auth.student);
  const [evaluations, setEvaluations] = useState([]);
  const isFocused = useIsFocused();

  async function getEvaluations() {
    const response = await api.get('evaluations', {
      params: { student_id: student.id },
    });

    const evaluationsFormatted = response.data.map(evaluation => ({
      ...evaluation,
      formattedDate: formatDateParse(evaluation.createdAt),
    }));
    setEvaluations(evaluationsFormatted);
  }
  useEffect(() => {
    if (isFocused) {
      getEvaluations();
    }
  }, [isFocused]);
  return (
    isFocused && (
      <Container>
        <List
          data={evaluations}
          keyExtractor={item => String(item.id)}
          ListEmptyComponent={<Warning message="Sem registro de avalição!" />}
          renderItem={({ item }) => (
            <ListSequence time={100}>
              <Item>
                <Row>
                  <Column>
                    <Title>Massa magra</Title>
                    <Text>{item.lean_mass}Kg</Text>
                  </Column>
                  <Column>
                    <Title>Massa gorda</Title>
                    <Text>{item.fat_mass}Kg</Text>
                  </Column>
                </Row>
                <Row>
                  <Column>
                    <Title>% de gordura</Title>
                    <Text>{item.fat_porc}%</Text>
                  </Column>
                  <Column>
                    <Title>Data</Title>
                    <Text>{item.formattedDate}</Text>
                  </Column>
                </Row>
              </Item>
            </ListSequence>
          )}
        />
      </Container>
    )
  );
}
