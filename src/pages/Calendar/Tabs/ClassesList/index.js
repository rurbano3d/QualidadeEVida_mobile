import React, { useCallback, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { isAfter } from 'date-fns';
import { scheduleCancelClass } from '~/store/modules/schedule/actions';

import ClassItem from './ClassItem';
import CancelModal from '../../../../components/CancelModal';

import {
  Message,
  Header,
  HeaderText,
  List,
  ItemButton,
  TextButton,
  Selected,
} from './styles';

const ClassesList = ({ selectedTab, classes, onRefresh }) => {
  const [reload, setReload] = useState(false);
  const [today, setToday] = useState('');
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const { status } = useSelector(state => state.schedule);

  useEffect(() => {
    onRefresh(reload);
  }, [reload]);

  useEffect(() => {
    if (classes) {
      switch (selectedTab) {
        case 1:
          setToday(classes.ter);
          break;
        case 2:
          setToday(classes.qua);
          break;
        case 3:
          setToday(classes.qui);
          break;
        case 4:
          setToday(classes.sex);
          break;
        default:
          setToday(classes.seg);
          break;
      }
      setLoading(false);
      setReload(false);
    }
  }, [selectedTab, classes]);

  const onVisible = useCallback(value => {
    setModalVisible(value);
    // It's necessary, cause without this miliseconds, monday return wrong
    setTimeout(() => {
      setReload(true);
    }, 500);
  }, []);

  useEffect(() => {
    if (status === 'saved') {
      setTimeout(() => {
        setReload(true);
      }, 500);
    }
  }, [status]);

  function cancelClass(id) {
    dispatch(scheduleCancelClass(id));
  }

  return (
    <>
      {!loading &&
        today.result.map(item => {
          if (item.vagas.length > 0) {
            return (
              <View key={item.classes.id}>
                <Header>
                  <HeaderText>Seu horário neste dia:</HeaderText>
                </Header>
                <ClassItem item={item} key={item.classes.id} canceled={false} />
                {!today.classCanceledThisWeek && item.isCancelableDay && (
                  <Selected>
                    <ItemButton
                      type="remove"
                      onPress={() => setModalVisible(true)}
                    >
                      <TextButton>Cancelar a aula de hoje</TextButton>
                    </ItemButton>
                  </Selected>
                )}

                <CancelModal
                  visible={modalVisible}
                  onVisible={onVisible}
                  onCancel={() => cancelClass(item.vagas[0]?.id)}
                />
              </View>
            );
          }
          if (item.vacancieCanceled.length > 0) {
            return (
              <View key={item.classes.id}>
                <Header>
                  <HeaderText>
                    Você cancelou esta aula, nesta semana:
                  </HeaderText>
                </Header>
                <ClassItem item={item} key={item.classes.id} canceled />
              </View>
            );
          }
        })}

      <Header>
        <HeaderText>Horários disponíveis neste dia:</HeaderText>
      </Header>

      <List
        data={today.result}
        refreshing={reload}
        onRefresh={() => setReload(true)}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <Message>Suas aulas não foram cadastradas ainda!</Message>
        }
        keyExtractor={item => String(item.classes.id)}
        renderItem={({ item }) =>
          item.remainingVacancies > 0 &&
          item.vagas.length <= 0 && (
            <>
              <ClassItem
                item={item}
                active={
                  today.classCanceledThisWeek && !today.classAddedThisWeek
                }
              />
              <Text>Aqui</Text>
            </>
          )
        }
      />
    </>
  );
};

export default ClassesList;
