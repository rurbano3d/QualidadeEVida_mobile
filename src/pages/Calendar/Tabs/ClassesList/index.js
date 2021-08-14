import React, { useEffect, useState } from 'react';

import ClassItem from './ClassItem';

import { Message, Header, HeaderText, List } from './styles';

const ClassesList = ({ selectedTab, classes, onRefresh }) => {
  const [reload, setReload] = useState(false);
  const [today, setToday] = useState('');
  const [loading, setLoading] = useState(true);
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
  return (
    <>
      {!loading &&
        today.map(item => {
          if (item.vagas.length > 0) {
            return (
              <>
                <Header>
                  <HeaderText>Seu horário neste dia:</HeaderText>
                </Header>
                <ClassItem item={item} key={item.classes.id} />
              </>
            );
          }
        })}
      <Header>
        <HeaderText>Horários disponíveis neste dia:</HeaderText>
      </Header>

      <List
        data={today}
        refreshing={reload}
        onRefresh={() => setReload(true)}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <Message>Suas aulas não foram cadastradas ainda!</Message>
        }
        keyExtractor={item => String(item.classes.id)}
        renderItem={({ item }) =>
          item.remainingVacancies !== 0 &&
          item.vagas.length <= 0 && <ClassItem item={item} />
        }
      />
    </>
  );
};

export default ClassesList;
