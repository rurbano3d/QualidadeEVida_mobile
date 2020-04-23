import React from 'react';
import { Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

import { formatDateParse } from '~/utils/index';

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
  const { title, points, count, lastDate } = route.params;
  return (
    <Container>
      <SlideRight>
        <Content>
          <Title>
            <TitleText>{title}</TitleText>
          </Title>

          <List>
            <Item>
              <Text>Última data</Text>
              <ValueText>{formatDateParse(lastDate)}</ValueText>
            </Item>
            <Item>
              <Text>Repetições</Text>
              <ValueText>{count}</ValueText>
            </Item>
            <Item>
              <Text>Pontuação</Text>
              <ValueText>{points}</ValueText>
            </Item>
          </List>
        </Content>
      </SlideRight>
    </Container>
  );
}
