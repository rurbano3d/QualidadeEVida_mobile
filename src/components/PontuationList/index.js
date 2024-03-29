import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import { useSelector } from 'react-redux';

import api from '~/services/api';

import Seletor from '~/components/Seletor';
import Loading from '~/components/Loading';

import Warning from '~/components/WarningWithoutInfo';
import SeparatorList from '~/components/SeparatorList';
import { List, PointText, Item } from './styles';

const PontuationList = () => {
  const [points, setPoints] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useSelector(state => state.auth.student);

  async function getPoints() {
    const response = await api.get(`points/${id}`);
    setPoints(response.data);
    setRefresh(false);
    setPage(page);
    setLoading(false);
  }

  useEffect(() => {
    getPoints();
  }, [refresh]);

  function loadMore() {
    if (points.length > 10) {
      const next = page + 1;
      getPoints(next);
    }
  }
  return loading ? (
    <Loading />
  ) : (
    <List
      onRefresh={getPoints}
      refreshing={refresh}
      showsVerticalScrollIndicator={false}
      data={points[0] && points[0].challenges}
      onEndReachedThreshold={0.01}
      onEndReached={loadMore}
      ListEmptyComponent={
        <Warning message="Você ainda não se inscreveu em nenhum Desafio" />
      }
      ItemSeparatorComponent={SeparatorList}
      keyExtractor={item => String(item.category_id)}
      renderItem={({ item }) => (
        <Item>
          <Seletor
            link="PointDetail"
            params={{
              title: item.title,
              points: item.score,
              count: item.count,
              lastDate: item.lastDate,
            }}
          >
            <Text>{item.title}</Text>
          </Seletor>
          <PointText>{item.score} pontos</PointText>
        </Item>
      )}
    />
  );
};

export default PontuationList;
