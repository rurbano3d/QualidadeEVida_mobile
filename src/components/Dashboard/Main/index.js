import React from 'react';
import { Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useClient } from '~/contexts/client';

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
  Content,
  Information,
  PointText,
  DescView,
  PointView,
  UserText,
  UserView,
} from './styles';

const Main = ({ register }) => {
  const { client } = useClient();
  return (
    <Container>
      <SlideTop>
        <Information>
          <UserView>
            <UserText>
              Olá,{'\n'}
              {register.student?.name}
            </UserText>
          </UserView>
          <DescView>
            {/* <MaterialCommunityIcons name="dumbbell" size={20} color="#444444" /> */}
            <UserText>Pontuação</UserText>
            <Pontuation />
          </DescView>
        </Information>
      </SlideTop>
      {register && (
        <>
          <Header>
            <Slideleft>
              <MonthlyInfo register={register} />
            </Slideleft>
          </Header>
        </>
      )}

      {client === 'qualidadeVida' && (
        <SlideTop>
          <Adds />
        </SlideTop>
      )}
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
