import React from 'react';

import { Container, Content, Title, Subtitle, Message } from './styles';
import Back from '~/assets/back.svg';

const Welcome = () => {
  return (
    <Container>
      <Content>
        <Back width="100%" height={150} />
        <Title>Bem vindo ao Aplicativo</Title>
        <Subtitle>Logo sua matrícula será ativada pelo seu Professor!</Subtitle>
        <Message>
          Com isso você terá acesso a todas as áreas do aplicativo.
        </Message>
      </Content>
    </Container>
  );
};

export default Welcome;
