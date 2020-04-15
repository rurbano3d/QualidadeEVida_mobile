import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

import api from '~/services/api';

import ExercisesRender from '~/components/Exercise/Render';
import SeparatorList from '~/components/SeparatorList';
import SlideRight from '~/Animation/SlideRight';

import { Container, Content, List, Title, TitleText } from './styles';

export default function MyCategory() {
  const route = useRoute();

  const { id, title } = route.params;

  const [exercises, setExercises] = useState({});

  // const exerciseSample = [
  //   {
  //     student_id: 2,
  //     category_id: 13,
  //     exercise_id: 40,
  //     date: '2020-04-08 18:30:11.544+00',
  //   },
  // ];

  useEffect(() => {
    async function getExercises() {
      const response = await api.get('exercises', {
        params: { category_id: id },
      });
      setExercises(response.data);
    }
    getExercises();
  }, []);

  return (
    <Container>
      <SlideRight>
        <Title>
          <TitleText>{title}</TitleText>
        </Title>
        <Content>
          <List
            data={exercises}
            ItemSeparatorComponent={SeparatorList}
            ListEmptyComponent={<Text>Sem atualização</Text>}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <ExercisesRender item={item} category={id} />
            )}
          />
        </Content>
      </SlideRight>
    </Container>
  );
}
