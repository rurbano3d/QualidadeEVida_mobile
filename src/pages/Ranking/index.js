import React from 'react';
import { Text } from 'react-native';
import Seletor from '~/components/Seletor';

import { Container, List, Item, PointText } from './styles';

export default function Ranking() {
  return (
    <Container>
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
    </Container>
  );
}
