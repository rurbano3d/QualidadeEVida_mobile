import React from 'react';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Button from '~/components/Button';
import Separator from '~/components/Separator';
import ExitButton from '~/components/Exit';
import SlideRight from '~/Animation/SlideRight';
import GrowUp from '~/Animation/GrowUp';

import { Container, List, Item } from './styles';

export default function User() {
  const navigation = useNavigation();
  return (
    <Container>
      <SlideRight>
        <List>
          <Item>
            <Text>Frederico Souza</Text>
          </Item>
          <Item>
            <Text>frebrotas@hotmail.com</Text>
          </Item>
          <Item>
            <Text>35 anos</Text>
          </Item>
          <Item>
            <Text>04/02/1985</Text>
          </Item>
          <Item>
            <Text>80Kg</Text>
          </Item>
          <Item>
            <Text>1.80 de altura</Text>
          </Item>
          <Item>
            <Text>1.80 de altura</Text>
          </Item>
          <Item>
            <ExitButton />
          </Item>
        </List>
      </SlideRight>
      <Separator />
      <GrowUp>
        <Button onPress={() => navigation.navigate('Evaluation', null)}>
          Últimas avaliações
        </Button>
      </GrowUp>
    </Container>
  );
}
