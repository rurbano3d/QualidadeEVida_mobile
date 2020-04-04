import React from 'react';
import { Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Button from '~/components/Button';
import Separator from '~/components/Separator';
import SlideRight from '~/Animation/SlideRight';
import Slideleft from '~/Animation/SlideLeft';
import SlideTop from '~/Animation/SlideTop';
import SlideBottom from '~/Animation/SlideBottom';
import GrowUp from '~/Animation/GrowUp';

import {
  Container,
  Alerts,
  Information,
  Checkin,
  PointText,
  CheckinView,
  DataText,
  DescView,
  StatusText,
} from './styles';

export default function Dashboard() {
  return (
    <Container>
      <SlideTop>
        <Alerts>
          <Text>Próxima mensalidade:</Text>
          <Text>05/02</Text>
        </Alerts>
      </SlideTop>

      <Slideleft>
        <Information>
          <DescView>
            <MaterialCommunityIcons name="dumbbell" size={20} color="#444444" />
            <Text>Pontuação</Text>
            <PointText>200 pontos</PointText>
          </DescView>
          <DescView>
            <MaterialCommunityIcons name="cash" size={20} color="#444444" />
            <Text>Mensalidade</Text>
            <StatusText>Em dia</StatusText>
          </DescView>
        </Information>
      </Slideleft>

      <Separator />
      <GrowUp>
        <Button>Novo check-in</Button>
      </GrowUp>
      <SlideBottom>
        <Checkin>
          <CheckinView>
            <Text>Check-in #3</Text>
            <DataText>Hoje às 14h</DataText>
          </CheckinView>
          <CheckinView>
            <Text>Check-in #3</Text>
            <DataText>Hoje às 14h</DataText>
          </CheckinView>
          <CheckinView>
            <Text>Check-in #3</Text>
            <DataText>Hoje às 14h</DataText>
          </CheckinView>
        </Checkin>
      </SlideBottom>
    </Container>
  );
}
