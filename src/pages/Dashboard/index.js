import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Separator from '~/components/Separator';

import Loading from '~/components/Loading';

import MonthlyInfo from '~/components/Dashboard/MonthlyInfo';
import Pontuation from '~/components/Dashboard/Pontuation';
import CheckList from '~/components/Dashboard/CheckList';
import Welcome from '~/components/Dashboard/Welcome';

import Slideleft from '~/Animation/SlideLeft';
import SlideTop from '~/Animation/SlideTop';
import SlideBottom from '~/Animation/SlideBottom';

import {
  Container,
  Header,
  Info,
  Content,
  Information,
  PointText,
  DescView,
} from './styles';

export default function Dashboard() {
  const isFocused = useIsFocused();
  const registration = useSelector(state => state.auth.registration);

  return (
    isFocused && (
      <Container>
        <Header>
          <SlideTop>
            <MonthlyInfo />
          </SlideTop>
        </Header>
        <Info>
          <Slideleft>
            <Information>
              <DescView>
                <MaterialCommunityIcons
                  name="dumbbell"
                  size={20}
                  color="#444444"
                />
                <Text>Pontuação</Text>
                <Pontuation />
              </DescView>
              <DescView>
                <MaterialCommunityIcons
                  name="folder-open"
                  size={20}
                  color="#444444"
                />
                <Text>Plano</Text>
                <PointText>
                  {registration ? registration.plan.title : 'Sem plano'}
                </PointText>
              </DescView>
            </Information>
          </Slideleft>
        </Info>
        <Separator />
        <Content>
          <SlideBottom>
            {registration != '' ? (
              <View>
                <CheckList />
              </View>
            ) : (
              <Welcome />
            )}
          </SlideBottom>
        </Content>
      </Container>
    )
  );
}
