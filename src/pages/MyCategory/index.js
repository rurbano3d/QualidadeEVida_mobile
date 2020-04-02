import React from 'react';
import { Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

import Button from '~/components/Button';
import Separator from '~/components/Separator';

import {
  Container,
  Content,
  List,
  Item,
  Title,
  TitleText,
  Sequency,
  Repetition,
} from './styles';

export default function MyCategory() {
  const route = useRoute();
  const { id } = route.params;
  console.tron.log(id);
  return (
    <Container>
      <Content>
        <Title>
          <TitleText>Sequência de aeróbicos</TitleText>
        </Title>

        <List>
          <Item>
            <Text>100 Polichinelo</Text>
            <Text>3 x 15</Text>
            <Sequency>
              <Repetition>
                <AntDesign name="checkcircleo" size={20} color="#42CB59" />
              </Repetition>
              <Repetition>
                <AntDesign name="checkcircleo" size={20} color="#afafaf" />
              </Repetition>
              <Repetition>
                <AntDesign name="checkcircleo" size={20} color="#afafaf" />
              </Repetition>
            </Sequency>
          </Item>
          <Item>
            <Text>100 Polichinelo</Text>
            <Text>3 x 15</Text>
            <Sequency>
              <Repetition>
                <AntDesign name="checkcircleo" size={20} color="#42CB59" />
              </Repetition>
              <Repetition>
                <AntDesign name="checkcircleo" size={20} color="#afafaf" />
              </Repetition>
              <Repetition>
                <AntDesign name="checkcircleo" size={20} color="#afafaf" />
              </Repetition>
            </Sequency>
          </Item>
          <Item>
            <Text>100 Polichinelo</Text>
            <Text>3 x 15</Text>
            <Sequency>
              <Repetition>
                <AntDesign name="checkcircleo" size={20} color="#42CB59" />
              </Repetition>
              <Repetition>
                <AntDesign name="checkcircleo" size={20} color="#afafaf" />
              </Repetition>
              <Repetition>
                <AntDesign name="checkcircleo" size={20} color="#afafaf" />
              </Repetition>
            </Sequency>
          </Item>
        </List>
      </Content>
    </Container>
  );
}
