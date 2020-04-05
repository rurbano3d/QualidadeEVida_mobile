import React from 'react';
import { Text } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

import Seletor from '~/components/Seletor';

import { Container, List, Item, ItemButton, TextButton } from './styles';
import ListSequence from '~/Animation/ListSequence';

import GrowUp from '~/Animation/GrowUp';

export default function Challenges() {
  const isFocused = useIsFocused();
  return (
    <Container>
      {isFocused && (
        <GrowUp>
          <List>
            <ListSequence time={100}>
              <Item>
                <Seletor link="Category" params={{ id: 30 }}>
                  <Text>Sequência de aeróbicos</Text>
                </Seletor>
                <ItemButton>
                  <TextButton>Inscrever-se</TextButton>
                </ItemButton>
              </Item>
            </ListSequence>
            <ListSequence time={200}>
              <Item>
                <Seletor link="Category" params={{ id: 30 }}>
                  <Text>Sequência de aeróbicos</Text>
                </Seletor>
                <ItemButton>
                  <TextButton>Inscrever-se</TextButton>
                </ItemButton>
              </Item>
            </ListSequence>
            <ListSequence time={300}>
              <Item>
                <Seletor link="Category" params={{ id: 30 }}>
                  <Text>Sequência de aeróbicos</Text>
                </Seletor>
                <ItemButton>
                  <TextButton>Inscrever-se</TextButton>
                </ItemButton>
              </Item>
            </ListSequence>
          </List>
        </GrowUp>
      )}
    </Container>
  );
}
