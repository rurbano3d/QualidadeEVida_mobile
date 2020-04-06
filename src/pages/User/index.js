import React from 'react';
import { Text } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { parseISO } from 'date-fns';
import { formatDatePure } from '~/utils';

import Button from '~/components/Button';
import Separator from '~/components/Separator';
import ExitButton from '~/components/Exit';
import SlideRight from '~/Animation/SlideRight';
import GrowUp from '~/Animation/GrowUp';

import { Container, List, Item } from './styles';

export default function User() {
  const student = useSelector((state) => state.auth.student);
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  return (
    isFocused && (
      <Container>
        <SlideRight>
          <List>
            <Item>
              <Text>{student.name}</Text>
            </Item>
            <Item>
              <Text>{student.email}</Text>
            </Item>
            <Item>
              <Text>{student.age} anos</Text>
            </Item>
            <Item>
              <Text>{formatDatePure(parseISO(student.birth))}</Text>
            </Item>
            <Item>
              <Text>{student.weight} Kg</Text>
            </Item>
            <Item>
              <Text>{student.height} de altura</Text>
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
    )
  );
}
