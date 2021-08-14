import React from 'react';
import { View } from 'react-native';
import { Entypo, MaterialIcons } from '@expo/vector-icons';
import { formatTime } from '~/utils';

import {
  Class,
  Hour,
  Info,
  OneLine,
  Highlight,
  Detail,
  DefaultText,
} from './styles';

const ClassItem = ({ item }) => {
  return (
    <Class highlight={item.vagas.length}>
      <Hour>
        <Highlight highlight={item.vagas.length}>
          {formatTime(item.classes.start_time)}
        </Highlight>
        <Detail highlight={item.vagas.length}>40 min </Detail>
      </Hour>
      <Info>
        <OneLine>
          <Entypo
            name="location-pin"
            size={17}
            color={item.vagas.length ? '#fff' : '#444444'}
          />
          <DefaultText highlight={item.vagas.length}>
            {item.classes.place === '' ? 'Academia' : item.classes.place}
          </DefaultText>
        </OneLine>
        <OneLine>
          <MaterialIcons
            name="directions-run"
            size={17}
            color={item.vagas.length ? '#fff' : '#444444'}
          />
          <DefaultText highlight={item.vagas.length}>
            {item.classes.teacher}
          </DefaultText>
        </OneLine>
      </Info>
      <View>
        <DefaultText highlight={item.vagas.length}>
          {item.vacanciesFilled}/{item.classes.vacancies} vagas
        </DefaultText>
      </View>
    </Class>
  );
};

export default ClassItem;
