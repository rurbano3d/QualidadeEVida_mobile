import React from 'react';
import { Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Seletor from '~/components/Seletor';
import Separator from '~/components/Separator';
import SlideTop from '~/Animation/SlideTop';
import SlideBottom from '~/Animation/SlideBottom';

import {
  Container,
  Information,
  DescView,
  PointText,
  List,
  Item,
} from './styles';

export default function Points() {
  return (
    <Container>
      <SlideTop>
        <Information>
          <DescView>
            <MaterialCommunityIcons name="medal" size={20} color="#444444" />
            <Text>Pontuação total</Text>
            <PointText>200 pontos</PointText>
          </DescView>
        </Information>
      </SlideTop>
      <Separator />
      <SlideBottom>
        <List>
          <Item>
            <Seletor link="PointDetail" params={{ id: 30 }}>
              <Text>Sequência de aeróbicos</Text>
            </Seletor>
            <PointText>50 pontos</PointText>
          </Item>
          <Item>
            <Seletor link="PointDetail" params={{ id: 30 }}>
              <Text>Sequência de aeróbicos</Text>
            </Seletor>
            <PointText>50 pontos</PointText>
          </Item>
          <Item>
            <Seletor link="PointDetail" params={{ id: 30 }}>
              <Text>Sequência de aeróbicos</Text>
            </Seletor>
            <PointText>50 pontos</PointText>
          </Item>
        </List>
      </SlideBottom>
    </Container>
  );
}
