import React from 'react';
import { Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

import {
  Container,
  Content,
  List,
  Item,
  Title,
  TitleText,
  ValueText,
} from './styles';

export default function PointDetail() {
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
            <Text>Última data</Text>
            <ValueText>20/02/2020</ValueText>
          </Item>
          <Item>
            <Text>Repetições</Text>
            <ValueText>5</ValueText>
          </Item>
          <Item>
            <Text>Pontuação</Text>
            <ValueText>100</ValueText>
          </Item>
        </List>
      </Content>
    </Container>
  );
}
