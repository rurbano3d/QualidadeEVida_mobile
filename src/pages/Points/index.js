import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useIsFocused } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import api from '~/services/api';

import Seletor from '~/components/Seletor';
import Separator from '~/components/Separator';
import SlideTop from '~/Animation/SlideTop';
import SlideBottom from '~/Animation/SlideBottom';
import Warning from '~/components/WarningWithoutInfo';
import SeparatorList from '~/components/SeparatorList';

import {
  Container,
  Information,
  DescView,
  PointText,
  List,
  Item,
} from './styles';

export default function Points() {
  const [points, setPoints] = useState([]);
  const isFocused = useIsFocused();
  const [refresh, setRefresh] = useState(false);
  const [page, setPage] = useState(null);
  const { id } = useSelector(state => state.auth.student);

  async function getPoints() {
    const response = await api.get(`points/${id}`);
    setPoints(response.data);
    setRefresh(false);
    setPage(page);
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

  return (
    isFocused && (
      <Container>
        <SlideTop execute={() => getPoints()}>
          <Information>
            <DescView>
              <MaterialCommunityIcons name="medal" size={20} color="#444444" />
              <Text>Pontuação total</Text>
              <PointText>{points[0] && points[0].totalScore} pontos</PointText>
            </DescView>
          </Information>
        </SlideTop>
        <Separator />
        <SlideBottom>
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
        </SlideBottom>
      </Container>
    )
  );
}
