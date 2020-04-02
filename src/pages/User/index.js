import React from 'react';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Button from '~/components/Button';
import Separator from '~/components/Separator';

import { Container, List, Item } from './styles';

export default function User() {
  const navigation = useNavigation();
  return (
    <Container>
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
      </List>
      <Separator />
      <Button onPress={() => navigation.navigate('Evaluation', null)}>
        Últimas avaliações
      </Button>
    </Container>
  );
}
