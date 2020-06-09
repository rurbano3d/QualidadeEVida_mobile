import React from 'react';

import { Container, Content, Title, Subtitle, Message } from './styles';
import Finished from '~/assets/finished2.svg';

const OrderDetailsFirst = () => {
  return (
    <Container>
      <Content>
        <Finished width="100%" height={150} />
        <Title>Bem vindo</Title>
        <Subtitle>
          Aqui você pode contar o que sentiu após o treino ou tirar alguma
          dúvida !
        </Subtitle>
        <Message>Digite sua mensagem e aguarde o professor responder!</Message>
      </Content>
    </Container>
  );
};

export default OrderDetailsFirst;
