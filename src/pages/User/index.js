import React from 'react';

import { useNavigation, useIsFocused } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { parseISO } from 'date-fns';
import { formatDatePure } from '~/utils';

import Button from '~/components/Button';
import Separator from '~/components/Separator';
import ExitButton from '~/components/Exit';
import SlideRight from '~/Animation/SlideRight';
import GrowUp from '~/Animation/GrowUp';

import { Container, List, Item, CustomText, ItemExit } from './styles';

export default function User() {
  const student = useSelector(state => state.auth.student);
  const studentFormatted = {
    ...student,
    formattedBirth: student.birth && formatDatePure(parseISO(student.birth)),
  };
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  return (
    isFocused && (
      <Container>
        <SlideRight>
          <List>
            <Item>
              <CustomText>{studentFormatted.name}</CustomText>
            </Item>
            <Item>
              <CustomText>{studentFormatted.email}</CustomText>
            </Item>
            <Item>
              <CustomText>{studentFormatted.age} anos</CustomText>
            </Item>
            <Item>
              <CustomText>
                {studentFormatted.birth && studentFormatted.formattedBirth}
              </CustomText>
            </Item>
            <Item>
              <CustomText>{studentFormatted.weight} Kg</CustomText>
            </Item>
            <Item>
              <CustomText>{studentFormatted.height} de altura</CustomText>
            </Item>
            <ItemExit>
              <ExitButton />
            </ItemExit>
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
