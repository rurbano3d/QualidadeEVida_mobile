import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import api from '~/services/api';
import { formatDateParse } from '~/utils';

import { challengeRequest } from '~/store/modules/challenges/actions';
import Seletor from '~/components/Seletor';
import SeparatorList from '~/components/SeparatorList';
import Warning from '~/components/WarningWithoutInfo';

import ListSequence from '~/Animation/ListSequence';

import {
  Container,
  List,
  Item,
  ItemButton,
  TextButton,
  Top,
  Bottom,
  BottomText,
} from './styles';

export default function Challenges() {
  const { id } = useSelector(state => state.auth.student);
  const dispatch = useDispatch();
  const [challenges, setChallenges] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [page, setPage] = useState(null);
  const isFocused = useIsFocused();

  async function getChallenges(page = 1) {
    const response = await api.get('categories', {
      params: { page, filter: true },
    });

    const subscriptions = await api.get(`subscriptions/${id}`);

    const challengesFilter = response.data.filter(item => {
      const verify = subscriptions.data.filter(
        subs => subs.category_id === item.id,
      );
      if (verify == '') {
        return { ...item };
      }
    });

    setRefresh(false);
    setPage(page);

    setChallenges(
      page >= 2 ? [...challenges, ...challengesFilter] : challengesFilter,
    );
  }

  useEffect(() => {
    getChallenges();
  }, [refresh]);

  function loadMore() {
    if (challenges.length > 10) {
      const next = page + 1;
      getChallenges(next);
    }
  }

  function handleSubscription(category_id) {
    dispatch(challengeRequest(id, category_id));
    setRefresh(true);
  }

  return (
    <Container>
      {isFocused && (
        <ListSequence time={100} onRefresh={() => getChallenges()}>
          <List
            onRefresh={getChallenges}
            refreshing={refresh}
            data={challenges}
            onEndReachedThreshold={0.01}
            onEndReached={loadMore}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={<Warning message="Sem Desafios disponívies" />}
            ItemSeparatorComponent={SeparatorList}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <Item>
                <Top>
                  <Seletor
                    link="Category"
                    params={{ id: item.id, title: item.title }}
                  >
                    <Text style={{ fontSize: 18 }}>{item.title}</Text>
                  </Seletor>
                  <ItemButton onPress={() => handleSubscription(item.id)}>
                    <TextButton>Adicionar</TextButton>
                  </ItemButton>
                </Top>
                <Bottom>
                  {item.start_date && (
                    <BottomText>
                      ({formatDateParse(item.start_date)} até{' '}
                      {formatDateParse(item.end_date)})
                    </BottomText>
                  )}
                </Bottom>
              </Item>
            )}
          />
        </ListSequence>
      )}
    </Container>
  );
}
