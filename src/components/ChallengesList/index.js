import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import Loading from '~/components/Loading';

import api from '~/services/api';

import {
  challengeRequest,
  challengeRemove,
} from '~/store/modules/challenges/actions';
import Seletor from '~/components/Seletor';
import SeparatorList from '~/components/SeparatorList';
import Warning from '~/components/WarningWithoutInfo';

import { formatDateParse } from '~/utils';

import {
  List,
  Item,
  ItemButton,
  TextButton,
  Top,
  Bottom,
  BottomText,
} from './styles';

const ChallengesList = ({ type }) => {
  const { id, gym_id } = useSelector(state => state.auth.student);
  const dispatch = useDispatch();
  const [challenges, setChallenges] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);

  async function getChallenges(page = 1) {
    const [categories, subscriptions] = await Promise.all([
      api.get('categories', {
        params: { page, filter: true, gym_id },
      }),
      api.get(`subscriptions/${id}`),
    ]);
    const challengesFilter = categories.data.filter(item => {
      const verify = subscriptions.data.filter(
        subs => subs.category_id === item.id,
      );

      if (type === 'add') {
        if (!verify.length) {
          return { ...item };
        }
      } else if (verify.length) {
        return { ...item };
      }
    });

    const challengesFormatted = challengesFilter.map(challenge => ({
      ...challenge,
      formattedStartDate: formatDateParse(challenge.start_date),
      formattedEndDate: formatDateParse(challenge.end_date),
    }));

    setLoading(false);
    setRefresh(false);
    setPage(page);

    setChallenges(
      page >= 2 ? [...challenges, ...challengesFormatted] : challengesFormatted,
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

  function handleAdd(category_id) {
    dispatch(challengeRequest(id, category_id));
    setRefresh(true);
  }
  function handleRemove(category_id) {
    dispatch(challengeRemove(id, category_id));
    setRefresh(true);
  }

  return loading ? (
    <Loading />
  ) : (
    <List
      onRefresh={getChallenges}
      refreshing={refresh}
      data={challenges}
      onEndReachedThreshold={0.01}
      onEndReached={loadMore}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={<Warning message="Sem Desafios disponíveis" />}
      ItemSeparatorComponent={SeparatorList}
      keyExtractor={item => String(item.id)}
      renderItem={({ item }) => (
        <Item>
          <Top>
            <Seletor
              link={type === 'add' ? 'Category' : 'MyCategory'}
              params={{ id: item.id, title: item.title }}
            >
              <>
                <Text style={{ fontSize: 18 }}>{item.title}</Text>
                <Bottom>
                  {item.start_date && (
                    <BottomText>
                      ({item.formattedStartDate} até {item.formattedEndDate})
                    </BottomText>
                  )}
                </Bottom>
              </>
            </Seletor>
            {type === 'add' ? (
              <ItemButton type={type} onPress={() => handleAdd(item.id)}>
                <TextButton>Adicionar</TextButton>
              </ItemButton>
            ) : (
              <ItemButton type={type} onPress={() => handleRemove(item.id)}>
                <TextButton>Remover</TextButton>
              </ItemButton>
            )}
          </Top>
        </Item>
      )}
    />
  );
};

export default ChallengesList;
