import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { FlatList, Text } from 'react-native';
import { Entypo, MaterialIcons } from '@expo/vector-icons';
import { formatTime } from '~/utils';
import api from '~/services/api';
import Loading from '~/components/Loading';

import {
  Container,
  Class,
  Hour,
  Info,
  OneLine,
  Highlight,
  Detail,
  Message,
} from './styles';

const Calendar = () => {
  const [agenda, setAgenda] = useState([]);
  const [reload, setReload] = useState(false);
  const [loading, setLoading] = useState(true);
  const { registration } = useSelector(state => state.auth);
  async function getAgenda() {
    if (registration) {
      const agendaInfo = await api.get('vacancies', {
        params: { registration: registration?.id },
      });
      setAgenda(agendaInfo.data.vacancies);
      setLoading(false);
    }
  }
  useEffect(() => {
    getAgenda();
  }, []);
  useEffect(() => {
    if (reload) {
      getAgenda();
      setReload(false);
    }
  }, [reload]);

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <FlatList
          data={agenda}
          refreshing={reload}
          onRefresh={() => setReload(true)}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <Message>Suas aulas não foram cadastradas ainda!</Message>
          }
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Class>
              <Hour>
                <Highlight>{item.daysClass.name}</Highlight>
                <Highlight>{formatTime(item.class.start_time)}</Highlight>
                <Detail>40 min</Detail>
              </Hour>
              <Info>
                <OneLine>
                  <Entypo name="location-pin" size={17} />
                  <Text>{item.class.place}</Text>
                </OneLine>
                <OneLine>
                  <MaterialIcons name="directions-run" size={17} />
                  <Text>{item.class.teacher}</Text>
                </OneLine>
              </Info>
            </Class>
          )}
        />
      )}
    </Container>
  );
};

export default Calendar;
