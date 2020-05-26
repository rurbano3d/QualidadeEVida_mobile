import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { setDate, parseISO } from 'date-fns';
import { formatDatePure } from '~/utils';

import api from '~/services/api';

import { Container, Warning, WarningView, CustomText } from './styles';

const MonthlyInfo = () => {
  const [monthly, setMonthly] = useState({});
  const registration = useSelector(state => state.auth.registration);
  async function getMonthlyPayments() {
    const response = await api.get('monthlyPayments', {
      params: { q: registration.id },
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
        };
      }
    });

    if (result) {
      setMonthly(result[0]);
    }
  }

  useEffect(() => {
    getMonthlyPayments();
  }, []);

  return (
    monthly && (
      <Container>
        {monthly.overdue ? (
          <WarningView>
            <Warning>Mensalidade atrasada:</Warning>
            <Warning>{monthly.paymentDayFormatted}</Warning>
          </WarningView>
        ) : (
          <>
            <CustomText>Próxima mensalidade:</CustomText>
            <CustomText>{monthly.paymentDayFormatted}</CustomText>
          </>
        )}
      </Container>
    )
  );
};

export default MonthlyInfo;
