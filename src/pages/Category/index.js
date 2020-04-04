import React from 'react';
import { Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

import Button from '~/components/Button';
import Separator from '~/components/Separator';
import SlideRight from '~/Animation/SlideRight';
import GrowUp from '~/Animation/GrowUp';

import { Container, Content, List, Item, Title, TitleText } from './styles';

export default function Category() {
  const route = useRoute();
  const { id } = route.params;
  console.tron.log(id);
  return (
    <Container>
      <SlideRight>
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
      </SlideRight>
      <Separator />
      <GrowUp>
        <Button color="#42CB59">Inscrever-se</Button>
      </GrowUp>
    </Container>
  );
}
