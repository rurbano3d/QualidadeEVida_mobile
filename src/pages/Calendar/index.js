import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import api from '~/services/api';
import Loading from '~/components/Loading';

import { Tabs } from './Tabs';

import { Container } from './styles';

const Calendar = () => {
  const [classes, setClasses] = useState({});
  const [loading, setLoading] = useState(true);
  const { registration, student } = useSelector(state => state.auth);
  async function getAgenda() {
    if (registration) {
      const seg = await api.get('schedule', {
        params: {
          order: 1,
          gym_id: student.gym_id,
          registration_id: registration,
        },
      });
      const ter = await api.get('schedule', {
        params: {
          order: 2,
          gym_id: student.gym_id,
          registration_id: registration,
        },
      });
      const qua = await api.get('schedule', {
        params: {
          order: 3,
          gym_id: student.gym_id,
          registration_id: registration,
        },
      });
      const qui = await api.get('schedule', {
        params: {
          order: 4,
          gym_id: student.gym_id,
          registration_id: registration,
        },
      });
      const sex = await api.get('schedule', {
        params: {
          order: 5,
          gym_id: student.gym_id,
          registration_id: registration,
        },
      });
      setClasses({
        seg: seg.data,
        ter: ter.data,
        qua: qua.data,
        qui: qui.data,
        sex: sex.data,
      });
      setLoading(false);
    }
  }
  useEffect(() => {
    getAgenda();
  }, []);

  const refreshQuery = value => {
    if (value) {
      getAgenda();
    }
  };

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <Tabs classes={classes} onRefresh={refreshQuery} />
      )}
    </Container>
  );
};

export default Calendar;
