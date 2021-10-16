import React from 'react';
import { useClient } from '~/contexts/client';

import MonthlyInfo from '~/components/Dashboard/MonthlyInfo';
import Pontuation from '~/components/Dashboard/Pontuation';

import Adds from '~/components/Adds';
import Render from './Render';

import Slideleft from '~/Animation/SlideLeft';
import SlideTop from '~/Animation/SlideTop';
import SlideBottom from '~/Animation/SlideBottom';
import {
  Container,
  Header,
  Content,
  Information,
  DescView,
  UserText,
  UserView,
  Top,
} from './styles';

const Main = ({ register, student }) => {
  const { client } = useClient();
  return (
    <Container>
      <Top>
        <SlideTop>
          <Information>
            <UserView>
              <UserText>
                Olá,{'\n'}
                {student?.name}
              </UserText>
            </UserView>
            <DescView>
              <UserText>Pontuação</UserText>
              <Pontuation />
            </DescView>
          </Information>
        </SlideTop>
      </Top>
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
          <Render register={register} />
        </SlideBottom>
      </Content>
    </Container>
  );
};
export default Main;
