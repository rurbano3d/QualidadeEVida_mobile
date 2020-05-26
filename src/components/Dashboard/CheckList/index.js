import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import Loading from '~/components/Loading';
import Button from '~/components/Button';
import { formatDate } from '~/utils';
import SeparatorList from '~/components/SeparatorList';

import api from '~/services/api';

import { checkinRequest } from '~/store/modules/checkin/actions';

import { Container, Checkin, CheckinView, DataText, CheckText } from './styles';

const CheckList = () => {
  const student = useSelector(state => state.auth.student);
  const [checkins, setCheckins] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const [page, setPage] = useState(null);

  async function getCheckins(page = 1) {
    const response = await api.get(`students/${student.id}/checkins`, {
      params: { page },
    });

    const checkinsFormatted = response.data.map(checkin => ({
      ...checkin,
      formattedData: formatDate(checkin.createdAt),
    }));
    setRefresh(false);
    setPage(page);
    setLoading(false);
    setCheckins(
      page >= 2 ? [...checkins, ...checkinsFormatted] : checkinsFormatted,
    );
  }

  useEffect(() => {
    getCheckins();
  }, [refresh]);

  function loadMore() {
    const next = page + 1;
    getCheckins(next);
  }

  async function handleNewCheckin() {
    dispatch(checkinRequest(student.id));
    setRefresh(true);
  }

  return loading ? (
    <Loading />
  ) : (
    <Container>
      <Button onPress={handleNewCheckin}>Novo check-in</Button>

      <Checkin
        onRefresh={getCheckins}
        refreshing={refresh}
        data={checkins}
        onEndReachedThreshold={0.01}
        onEndReached={loadMore}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={SeparatorList}
        keyExtractor={item => String(item.id)}
        nestedScrollEnabled
        renderItem={({ item }) => (
          <CheckinView>
            <CheckText>Check-in </CheckText>
            <DataText>{item.formattedData}</DataText>
          </CheckinView>
        )}
      />
    </Container>
  );
};

export default CheckList;
