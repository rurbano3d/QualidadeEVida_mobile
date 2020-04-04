import React from 'react';
import { Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

import SlideRight from '~/Animation/SlideRight';

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
      <SlideRight>
        <Content>
          <Title>
            <TitleText>Sequência de aeróbicos</TitleText>
          </Title>

          <List>
            <Item>
              <Text>Frederico</Text>
              <ValueText>200 pontos</ValueText>
            </Item>
            <Item>
              <Text>Rodrigo</Text>
              <ValueText>180 pontos</ValueText>
            </Item>
            <Item>
              <Text>Rodrigo</Text>
              <ValueText>180 pontos</ValueText>
            </Item>
          </List>
        </Content>
      </SlideRight>
    </Container>
  );
}
