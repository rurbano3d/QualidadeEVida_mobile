import React from 'react';
import { Text } from 'react-native';

import Seletor from '~/components/Seletor';

import { Container, List, Item, ItemButton, TextButton } from './styles';

export default function MyChallenges() {
  return (
    <Container>
      <List>
        <Item>
          <Seletor link="MyCategory" params={{ id: 30 }}>
            <Text>Sequência de aeróbicos</Text>
          </Seletor>
          <ItemButton>
            <TextButton>Desinscrever-se</TextButton>
          </ItemButton>
        </Item>
        <Item>
          <Seletor link="MyCategory" params={{ id: 30 }}>
            <Text>Sequência de aeróbicos</Text>
          </Seletor>
          <ItemButton>
            <TextButton>Desinscrever-se</TextButton>
          </ItemButton>
        </Item>
        <Item>
          <Seletor link="MYCategory" params={{ id: 30 }}>
            <Text>Sequência de aeróbicos</Text>
          </Seletor>
          <ItemButton>
            <TextButton>Desinscrever-se</TextButton>
          </ItemButton>
        </Item>
      </List>
    </Container>
  );
}
