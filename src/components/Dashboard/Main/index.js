import React from 'react';
import { Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Separator from '~/components/Separator';
import MonthlyInfo from '~/components/Dashboard/MonthlyInfo';
import Pontuation from '~/components/Dashboard/Pontuation';
import CheckList from '~/components/Dashboard/CheckList';
import Welcome from '~/components/Dashboard/Welcome';
import BlockedAccess from '~/components/Dashboard/BlockedAccess';
import Registration from '~/components/Dashboard/Registration';
import Adds from '~/components/Adds';

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

const Main = ({ register }) => {
  return (
    <Container>
      <SlideTop>
        <Adds />
      </SlideTop>
      {register && (
        <>
          <Header>
            <SlideTop>
              <MonthlyInfo register={register} />
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
                    {register.plan ? register.plan.title : 'Sem plano'}
                  </PointText>
                </DescView>
              </Information>
            </Slideleft>
          </Info>
        </>
      )}

      <Separator />
      <Content>
        <SlideBottom>
          {!register ? (
            <Welcome />
          ) : register.blockedAccess ? (
            <BlockedAccess />
          ) : register.active ? (
            <CheckList />
          ) : (
            <Registration />
          )}
        </SlideBottom>
      </Content>
    </Container>
  );
};
export default Main;
