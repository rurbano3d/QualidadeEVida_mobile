import React from 'react';
import { Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

import Button from '~/components/Button';
import Separator from '~/components/Separator';

import { Container, Content, List, Item, Title, TitleText } from './styles';

export default function Category() {
  const route = useRoute();
  const { id } = route.params;
  console.tron.log(id);
  return (
    <Container>
      <Content>
        <Title>
          <TitleText>Sequência de aeróbicos</TitleText>
        </Title>

        <List>
          <Item>
            <Text>100 Polichinelo</Text>
            <Text>3 x 15</Text>
          </Item>
          <Item>
            <Text>100 Polichinelo</Text>
            <Text>3 x 15</Text>
          </Item>
          <Item>
            <Text>100 Polichinelo</Text>
            <Text>3 x 15</Text>
          </Item>
        </List>
      </Content>

      <Separator />
      <Button color="#42CB59">Inscrever-se</Button>
    </Container>
  );
}
