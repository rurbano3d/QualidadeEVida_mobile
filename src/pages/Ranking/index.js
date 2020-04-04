import React from 'react';
import { Text } from 'react-native';
import Seletor from '~/components/Seletor';
import SlideTop from '~/Animation/SlideTop';

import { Container, List, Item, PointText } from './styles';

export default function Ranking() {
  return (
    <Container>
      <SlideTop>
        <List>
          <Item>
            <Seletor link="RankingDetail" params={{ id: 30 }}>
              <Text>Sequência de aeróbicos</Text>
            </Seletor>
            <PointText>5º lugar</PointText>
          </Item>
          <Item>
            <Seletor link="RankingDetail" params={{ id: 30 }}>
              <Text>Sequência de aeróbicos</Text>
            </Seletor>
            <PointText>5º lugar</PointText>
          </Item>
          <Item>
            <Seletor link="RankingDetail" params={{ id: 30 }}>
              <Text>Sequência de aeróbicos</Text>
            </Seletor>
            <PointText>5º lugar</PointText>
          </Item>
        </List>
      </SlideTop>
    </Container>
  );
}
