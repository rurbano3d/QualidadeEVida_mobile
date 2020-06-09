import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FlatList, View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { formatDateRegressive } from '~/utils';

import api from '~/services/api';
import { orderRemove } from '~/store/modules/order/actions';

import NewOrder from '~/components/NewOrder';
import OrderFirst from '~/components/OrderDetails-First';
import Loading from '~/components/Loading';

import {
  Container,
  Content,
  QuestionView,
  Question,
  AnswerView,
  Answer,
  AnswerDate,
  Name,
  Message,
  Top,
  Remove,
} from './styles';

const OrderDetailPage = () => {
  const route = useRoute();
  const dispatch = useDispatch();
  const { sector, sector_id, refresh } = route.params;

  const { id } = useSelector(state => state.auth.student);
  const [orders, setOrders] = useState([]);
  const [answerNull, setAnswerNull] = useState(true);
  const [page, setPage] = useState(null);
  const [refreshFlat, setRefreshFlat] = useState(false);
  const [loading, setLoading] = useState(true);

  async function getOrders(page = 1) {
    const response = await api.get('help-orders', {
      params: {
        student_id: id,
        sector,
        sector_id,
        page,
      },
    });
    const ordersFormatted = response.data.help_orders.map(order => {
      return {
        ...order,
        questionShort: `${order.question.substr(0, 35)} ...`,
        answerDate:
          `respondeu ${formatDateRegressive(order.answer_at)}` ||
          'aguardando resposta',
      };
    });

    const ordersFilter = response.data.help_orders.filter(
      item => item.answer === null || item.answer === '',
    );
    setAnswerNull(!!ordersFilter.length);
    setRefreshFlat(false);
    setPage(page);
    setLoading(false);
    setOrders(page >= 2 ? [...orders, ...ordersFormatted] : ordersFormatted);
  }
  useEffect(() => {
    getOrders();
  }, [id, refresh, refreshFlat]);
  function loadMore() {
    const next = page + 1;
    if (orders.length >= 10) {
      getOrders(next);
    }
  }
  function handleDelete(id) {
    dispatch(orderRemove(id));
    setRefreshFlat(true);
  }

  return loading ? (
    <Loading />
  ) : (
    <Container>
      <Content>
        <FlatList
          data={orders}
          onRefresh={getOrders}
          refreshing={refreshFlat}
          onEndReachedThreshold={0.5}
          onEndReached={loadMore}
          ListEmptyComponent={<OrderFirst />}
          inverted={!!orders.length}
          keyExtract={item => String(item.id)}
          renderItem={({ item }) => (
            <>
              {!!item.answer && (
                <AnswerView>
                  <Name>Professor</Name>
                  <Answer>{item.answer}</Answer>
                  <AnswerDate>{item.answerDate}</AnswerDate>
                </AnswerView>
              )}

              <QuestionView>
                <Top>
                  <Name>Você</Name>
                  {!item.answer && (
                    <Remove onPress={() => handleDelete(item.id)}>
                      <MaterialCommunityIcons
                        name="close"
                        size={15}
                        color="#666"
                      />
                    </Remove>
                  )}
                </Top>
                <Question>{item.question}</Question>
              </QuestionView>
            </>
          )}
        />
        <Message>
          <NewOrder
            sector={sector}
            sector_id={sector_id}
            disabled={answerNull}
            onRefresh={() => setRefreshFlat(true)}
          />
        </Message>
      </Content>
    </Container>
  );
};

export default OrderDetailPage;
