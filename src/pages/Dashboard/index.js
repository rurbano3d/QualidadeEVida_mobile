import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { setDate, parseISO } from 'date-fns';

import { formatDate, formatDatePure } from '~/utils';

import Button from '~/components/Button';
import Separator from '~/components/Separator';
import Slideleft from '~/Animation/SlideLeft';
import SlideTop from '~/Animation/SlideTop';
import SlideBottom from '~/Animation/SlideBottom';
import GrowUp from '~/Animation/GrowUp';
import { checkinRequest } from '../../store/modules/checkin/actions';

import api from '~/services/api';

import {
  Container,
  Alerts,
  Information,
  Checkin,
  PointText,
  CheckinView,
  DataText,
  DescView,
  Warning,
  WarningView,
} from './styles';

export default function Dashboard() {
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const student = useSelector((state) => state.auth.student);
  const registration = useSelector((state) => state.auth.registration[0]);
  const [checkins, setCheckins] = useState(null);
  const [page, setPage] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const [monthly, setMonthly] = useState(null);

  async function getCheckins(page = 1) {
    const response = await api.get(`students/${student.id}/checkins`, {
      params: { page },
    });
    setRefresh(false);
    setPage(page);
    setCheckins(page >= 2 ? [...checkins, ...response.data] : response.data);
  }

  async function getMonthlyPayments() {
    const response = await api.get('monthlyPayments', {
      params: { q: registration.id },
    });
    const filter = response.data.filter((item) => item.payday === null);
    const result = filter.map((item) => {
      if (item.payday === null) {
        const newPaymentDay = setDate(
          parseISO(item.payment_day),
          item.overdue_day
        );
        return {
          ...item,
          newPaymentDay,
        };
      }
    });
    if (result != '') {
      setMonthly(result);
    }
  }
  useEffect(() => {
    getCheckins();
    getMonthlyPayments();
  }, [refresh]);

  function loadMore() {
    const next = page + 1;
    getCheckins(next);
  }

  async function handleNewCheckin() {
    dispatch(checkinRequest(student.id));
    setRefresh(true);
  }
  return (
    <Container>
      <SlideTop isFocused={isFocused}>
        <Alerts>
          {monthly ? (
            monthly[0].overdue ? (
              <WarningView>
                <Warning>Mensalidade atrasada:</Warning>
                <Warning>
                  {monthly && formatDatePure(monthly[0].newPaymentDay)}
                </Warning>
              </WarningView>
            ) : (
              <>
                <Text>Próxima mensalidade:</Text>
                <Text>
                  {monthly && formatDatePure(monthly[0].newPaymentDay)}
                </Text>
              </>
            )
          ) : (
            <Text>Mensalidade Quitada</Text>
          )}
        </Alerts>
      </SlideTop>

      <Slideleft isFocused={isFocused}>
        <Information>
          <DescView>
            <MaterialCommunityIcons name="dumbbell" size={20} color="#444444" />
            <Text>Pontuação</Text>
            <PointText>200 pontos</PointText>
          </DescView>
          <DescView>
            <MaterialCommunityIcons
              name="folder-open"
              size={20}
              color="#444444"
            />
            <Text>Plano</Text>
            <PointText>{registration.plan.title}</PointText>
          </DescView>
        </Information>
      </Slideleft>

      <Separator />
      <GrowUp isFocused={isFocused}>
        <Button onPress={handleNewCheckin}>Novo check-in</Button>
      </GrowUp>
      <SlideBottom isFocused={isFocused}>
        <Checkin
          onRefresh={getCheckins}
          refreshing={refresh}
          data={checkins}
          onEndReachedThreshold={0.01}
          onEndReached={loadMore}
          keyExtract={(item) => item.id}
          renderItem={({ item }) => (
            <CheckinView>
              <Text>Check-in #{item.id}</Text>
              <DataText>{formatDate(item.createdAt)}</DataText>
            </CheckinView>
          )}
        />
      </SlideBottom>
    </Container>
  );
}
