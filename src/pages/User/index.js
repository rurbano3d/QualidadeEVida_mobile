import React, { useState, useEffect } from 'react';

import { useNavigation, useIsFocused } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { parseISO } from 'date-fns';
import { formatDatePure } from '~/utils';

import api from '~/services/api';
import Button from '~/components/Button';
import Separator from '~/components/Separator';
import ExitButton from '~/components/Exit';
import SlideRight from '~/Animation/SlideRight';
import GrowUp from '~/Animation/GrowUp';
import Loading from '~/components/Loading';

import {
  Container,
  List,
  Item,
  CustomText,
  ItemExit,
  Title,
  ButtonView,
} from './styles';

export default function User() {
  const [register, setRegister] = useState({});
  const [loading, setLoading] = useState(true);
  const student = useSelector(state => state.auth.student);
  const studentFormatted = {
    ...student,
    formattedBirth: student.birth && formatDatePure(parseISO(student.birth)),
  };
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  useEffect(() => {
    async function getPlan() {
      try {
        const response = await api.get('registrations', {
          params: { student_id: student.id },
        });

        setRegister(response.data[0]);
        setLoading(false);
      } catch (err) {}
    }
    if (isFocused) {
      getPlan();
    }
  }, []);
  return isFocused && loading ? (
    <Loading />
  ) : (
    <Container>
      <SlideRight>
        <Title>Plano atual</Title>
        <List>
          <Item>
            <CustomText>
              {register ? register.plan.title : 'Sem plano'}
            </CustomText>
          </Item>
        </List>

        <Title>Dados Pessoais</Title>
        <List>
          <Item>
            <CustomText>{studentFormatted.name}</CustomText>
          </Item>
          <Item>
            <CustomText>{studentFormatted.email}</CustomText>
          </Item>
          <Item>
            <CustomText>{studentFormatted.city}</CustomText>
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
        <ButtonView>
          <Button onPress={() => navigation.navigate('Evaluation', null)}>
            Últimas avaliações
          </Button>
        </ButtonView>
      </GrowUp>
    </Container>
  );
}
