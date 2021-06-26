import React, { useState, useEffect } from 'react';

import { useIsFocused } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { setRegistration } from '~/store/modules/auth/actions';

import api from '~/services/api';

import Loading from '~/components/Loading';

import Main from '~/components/Dashboard/Main';

import { Container } from './styles';

export default function Dashboard() {
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const { student } = useSelector(state => state.auth);
  const [loading, setLoading] = useState(true);
  const [register, setRegister] = useState({});
  useEffect(() => {
    async function getBlocked() {
      try {
        const response = await api.get('registrations', {
          params: { student_id: student.id },
        });

        const registration = response.data[0];
        if (registration) {
          dispatch(setRegistration(registration.id));
          const overdue = await api.get('monthlyOverdue', {
            params: { q: registration?.id },
          });
          const { blockedAccess } = overdue.data;

          const registrationFormatted = {
            ...registration,
            blockedAccess,
          };

          setRegister(registrationFormatted);
        } else {
          setRegister(null);
        }
        setLoading(false);
      } catch (err) {}
    }

    if (isFocused) {
      setLoading(true);
      getBlocked();
    }
  }, [isFocused]);

  return isFocused && loading ? (
    <Loading />
  ) : (
    <Container>
      <Main register={register} />
    </Container>
  );
}
