import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import { useSelector } from 'react-redux';
import { setDate, parseISO } from 'date-fns';
import { formatDatePure, formatDate } from '~/utils';

import api from '~/services/api';

import {
  Container,
  Warning,
  WarningView,
  CustomText,
  AlertView,
  NormalView,
} from './styles';

const MonthlyInfo = ({ register }) => {
  const [monthly, setMonthly] = useState({});

  async function getMonthlyPayments() {
    const response = await api.get('monthlyPayments', {
      params: { q: register?.id },
    });

    const filter = response.data.filter(item => item.payday === null);
    const result = filter.map(item => {
      if (item.payday === null) {
        const newPaymentDay = setDate(
          parseISO(item.payment_day),
          item.overdue_day,
        );
        return {
          ...item,
          paymentDayFormatted: formatDatePure(newPaymentDay),
          overdueFormatted: formatDatePure(newPaymentDay),
        };
      }
    });

    if (result) {
      setMonthly(result[0]);
    }
  }

  useEffect(() => {
    getMonthlyPayments();
  }, [register]);

  return monthly ? (
    <Container>
      {monthly.overdue ? (
        <WarningView>
          <Warning>Mensalidade atrasada:</Warning>
          <Warning>{monthly.overdueFormatted}</Warning>
        </WarningView>
      ) : (
        <NormalView>
          <CustomText>Próxima mensalidade:</CustomText>
          <CustomText>{monthly.paymentDayFormatted}</CustomText>
        </NormalView>
      )}
    </Container>
  ) : !register?.active ? (
    <AlertView>
      <Warning>Sua matrícula venceu</Warning>
      <Warning>{formatDate(register?.end_date)}</Warning>
    </AlertView>
  ) : (
    <NormalView>
      <CustomText>Sua matrícula vence</CustomText>
      <CustomText>{formatDate(register?.end_date)}</CustomText>
    </NormalView>
  );
};

export default MonthlyInfo;
