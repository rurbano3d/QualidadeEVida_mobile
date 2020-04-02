import React from 'react';
import { Text } from 'react-native';

import Seletor from '~/components/Seletor';

import { Container, List, Item, ItemButton, TextButton } from './styles';

export default function Challenges() {
  return (
    <Container>
      <List>
        <Item>
          <Seletor link="Category" params={{ id: 30 }}>
            <Text>Sequência de aeróbicos</Text>
          </Seletor>
          <ItemButton>
            <TextButton>Inscrever-se</TextButton>
          </ItemButton>
        </Item>
        <Item>
          <Seletor link="Category" params={{ id: 30 }}>
            <Text>Sequência de aeróbicos</Text>
          </Seletor>
          <ItemButton>
            <TextButton>Inscrever-se</TextButton>
          </ItemButton>
        </Item>
        <Item>
          <Seletor link="Category" params={{ id: 30 }}>
            <Text>Sequência de aeróbicos</Text>
          </Seletor>
          <ItemButton>
            <TextButton>Inscrever-se</TextButton>
          </ItemButton>
        </Item>
      </List>
    </Container>
  );
}
