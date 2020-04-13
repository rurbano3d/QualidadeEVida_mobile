import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { useSelector } from 'react-redux';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import api from '~/services/api';

import { formatDateParse } from '~/utils';

import ListSequence from '~/Animation/ListSequence';

import { Container, List, Row, Column, Title, Item, Warning } from './styles';

export default function Evaluation() {
  const student = useSelector((state) => state.auth.student);
  const [evaluations, setEvaluations] = useState({});

  async function getEvaluations() {
    const response = await api.get('evaluations', {
      params: { student_id: student.id },
    });
    setEvaluations(response.data);
  }
  useEffect(() => {
    getEvaluations();
  }, []);
  return (
    <Container>
      {evaluations == '' && (
        <Warning>
          <MaterialCommunityIcons
            name="alert-circle-outline"
            size={70}
            color="#53b1da"
          />
          <Text style={{ fontSize: 15 }}>Sem registro de avaliação!</Text>
          <Text style={{ fontSize: 15 }}>Consulte seu professor!</Text>
        </Warning>
      )}
      <List
        data={evaluations}
        keyExtract={(item) => String(item.id)}
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
                  <Text>{formatDateParse(item.createdAt)}</Text>
                </Column>
              </Row>
            </Item>
          </ListSequence>
        )}
      />
    </Container>
  );
}
