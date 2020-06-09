import React from 'react';

import NewOrder from '~/components/NewOrder';

import { Container, Content, Title } from './styles';

const OrderPage = ({ sector, sector_id }) => {
  return (
    <Container>
      <Content>
        <Title>
          Gostaria de passar alguma informação ou contar como se sentiu após o
          treino de hoje?
        </Title>
        <NewOrder sector={sector} sector_id={sector_id} />
      </Content>
    </Container>
  );
};

export default OrderPage;
