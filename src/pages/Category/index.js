import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';

import api from '~/services/api';
import { challengeRequest } from '~/store/modules/challenges/actions';
import SeparatorList from '~/components/SeparatorList';
import Button from '~/components/Button';
import Separator from '~/components/Separator';
import SlideRight from '~/Animation/SlideRight';
import GrowUp from '~/Animation/GrowUp';

import { Container, Content, List, Item, Title, TitleText } from './styles';

export default function Category() {
  const route = useRoute();
  const dispatch = useDispatch();
  const student = useSelector((state) => state.auth.student);
  const [refresh, setRefresh] = useState(false);
  const { id, title } = route.params;
  const [exercises, setExercises] = useState(null);

  useEffect(() => {
    async function getExercises() {
      const response = await api.get('exercises', {
        params: { category_id: id },
      });
      setExercises(response.data);
    }
    getExercises();
  }, []);

  function handleSubscription() {
    dispatch(challengeRequest(student.id, id));
    setRefresh(true);
  }
  return (
    <Container>
      <SlideRight>
        <Content>
          <Title>
            <TitleText>{title}</TitleText>
          </Title>
          <List
            data={exercises}
            ItemSeparatorComponent={SeparatorList}
            ListEmptyComponent={<Text>Sem atualização</Text>}
            keyExtract={(item) => String(item.id)}
            renderItem={({ item }) => (
              <Item>
                <Text>{item.title}</Text>
                {item.amount ? (
                  <Text>
                    {item.repetitions} x {item.amount}
                  </Text>
                ) : (
                  <Text>
                    {item.repetitions} x {item.time} segundos
                  </Text>
                )}
              </Item>
            )}
          />
          {/* <List>
            <Item>
              <Text>{exercises.title}</Text>
              <Text>
                {exercises.repetitions} x {exercises.time} segundos
              </Text>
            </Item>
            
            <Item>
              <Text>100 Polichinelo</Text>
              <Text>3 x 15</Text>
            </Item>
          </List> */}
        </Content>
      </SlideRight>
      <Separator />
      <GrowUp>
        {!refresh && (
          <Button color="#42CB59" onPress={() => handleSubscription(id)}>
            Inscrever-se
          </Button>
        )}
      </GrowUp>
    </Container>
  );
}
