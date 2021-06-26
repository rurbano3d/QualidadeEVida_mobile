import React, { useState, useEffect, useCallback } from 'react';

import { setDate, parseISO, differenceInDays } from 'date-fns';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { formatDatePure, formatDate, formatDateRegressivePure } from '~/utils';

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

  const displayWarningOverdue = useCallback(() => {
    const day = differenceInDays(new Date(), monthly.paymentDay);
    if (day - 1 >= -5) {
      return true;
    }
    return false;
  }, [monthly]);

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
          paymentDay: newPaymentDay,
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
          <MaterialCommunityIcons name="alert-circle" size={25} color="#fff" />
          <Warning>Mensalidade atrasada: {monthly.overdueFormatted}</Warning>
        </WarningView>
      ) : displayWarningOverdue() ? (
        <WarningView>
          <MaterialCommunityIcons name="alert-circle" size={25} color="#fff" />
          <Warning>
            Mensalidade vence {formatDateRegressivePure(monthly.paymentDay)}
          </Warning>
        </WarningView>
      ) : (
        <NormalView>
          <Feather name="alert-circle" size={25} />
          <CustomText>
            Próxima mensalidade: {monthly.paymentDayFormatted}
          </CustomText>
        </NormalView>
      )}
    </Container>
  ) : !register?.active ? (
    <AlertView>
      <MaterialCommunityIcons
        name="alert-circle-outline"
        size={25}
        color="#f47b75"
      />
      <CustomText>
        Sua matrícula venceu {formatDate(register?.end_date)}
      </CustomText>
    </AlertView>
  ) : (
    <AlertView>
      <MaterialCommunityIcons
        name="alert-circle-outline"
        size={25}
        color="#f47b75"
      />
      <CustomText>
        Sua matrícula vence {formatDate(register?.end_date)}
      </CustomText>
    </AlertView>
  );
};

export default MonthlyInfo;
