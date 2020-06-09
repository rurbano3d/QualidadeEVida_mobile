import React from 'react';
import { Text } from 'react-native';

import Warning from '~/components/WarningWithoutInfo';
import Seletor from '~/components/Seletor';

import { List, Item, DateView, InfoView, Title, DateText } from './styles';

const TrainingFlatlist = ({ trainings }) => {
  return (
    <List
      data={trainings}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={<Warning message="Sem treinos disponíveis" />}
      keyExtractor={item => String(item.id)}
      renderItem={({ item }) => (
        <Item finished={item.finished}>
          <DateView>
            <DateText>{item.dateFormatted}</DateText>
          </DateView>
          <InfoView>
            <Seletor link="TrainingDetail" params={item}>
              <>
                <Title>{item.title}</Title>
                <Text>Olá {item.firstName}, </Text>
                <Text>{item.description}</Text>
              </>
            </Seletor>
          </InfoView>
        </Item>
      )}
    />
  );
};

export default TrainingFlatlist;
