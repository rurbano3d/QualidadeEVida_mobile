import React from 'react';
import { Text } from 'react-native';

import Seletor from '~/components/Seletor';
import ListSequence from '~/Animation/ListSequence';

import { Container, List, Item, ItemButton, TextButton } from './styles';

export default function MyChallenges() {
  return (
    <Container>
      <List>
        <ListSequence time={100}>
          <Item>
            <Seletor link="MyCategory" params={{ id: 30 }}>
              <Text>Sequência de aeróbicos</Text>
            </Seletor>
            <ItemButton>
              <TextButton>Desinscrever-se</TextButton>
            </ItemButton>
          </Item>
        </ListSequence>
        <ListSequence time={200}>
          <Item>
            <Seletor link="MyCategory" params={{ id: 30 }}>
              <Text>Sequência de aeróbicos</Text>
            </Seletor>
            <ItemButton>
              <TextButton>Desinscrever-se</TextButton>
            </ItemButton>
          </Item>
        </ListSequence>
        <ListSequence time={300}>
          <Item>
            <Seletor link="MYCategory" params={{ id: 30 }}>
              <Text>Sequência de aeróbicos</Text>
            </Seletor>
            <ItemButton>
              <TextButton>Desinscrever-se</TextButton>
            </ItemButton>
          </Item>
        </ListSequence>
      </List>
    </Container>
  );
}
