import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import Loading from '~/components/Loading';
import Button from '~/components/Button';
import { formatDate } from '~/utils';

import api from '~/services/api';

import { checkinRequest } from '~/store/modules/checkin/actions';

import Warning from '~/components/WarningWithoutInfo';
import {
  Container,
  Checkin,
  CheckinView,
  DataText,
  CheckText,
  Content,
} from './styles';

const CheckList = () => {
  const student = useSelector(state => state.auth.student);
  const [checkins, setCheckins] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  async function getCheckins() {
    const response = await api.get(`students/${student.id}/checkins`, {
      params: { mobile: true },
    });
    if (response.data.length) {
      const checkinsFormatted = response.data.map(checkin => ({
        ...checkin,
        formattedData: formatDate(checkin.createdAt),
      }));

      setCheckins(checkinsFormatted);
    }
    setRefresh(false);
    setLoading(false);
  }

  useEffect(() => {
    getCheckins();
  }, [refresh]);

  async function handleNewCheckin() {
    dispatch(checkinRequest(student.id));
    setRefresh(true);
  }
  return loading ? (
    <Loading />
  ) : (
    <Container>
      <Button onPress={handleNewCheckin}>Novo check-in</Button>
      <Content>
        {!checkins.length ? (
          <Warning message="Você não fez nenhum checkin" />
        ) : (
          <Checkin>
            {checkins.map(checkin => (
              <CheckinView key={checkin.id}>
                <CheckText>Check-in </CheckText>
                <DataText>{checkin.formattedData}</DataText>
              </CheckinView>
            ))}
          </Checkin>
        )}
      </Content>
    </Container>
  );
};

export default CheckList;
