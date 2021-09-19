import React from 'react';
import { Entypo, MaterialIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { scheduleAddClass } from '~/store/modules/schedule/actions';
import { formatTime } from '~/utils';

import {
  Class,
  Hour,
  Info,
  OneLine,
  Highlight,
  Detail,
  DefaultText,
  ItemButton,
  TextButton,
  Right,
} from './styles';

const ClassItem = ({ item, canceled, active }) => {
  const dispatch = useDispatch();
  const { registration } = useSelector(state => state.auth);

  const handleAddClass = () => {
    dispatch(scheduleAddClass(registration, item.classes.id, item.id));
  };

  return (
    <Class highlight={item.vagas.length} canceled={canceled}>
      <Hour>
        <Highlight highlight={item.vagas.length} canceled={canceled}>
          {formatTime(item.classes.start_time)}
        </Highlight>
        <Detail highlight={item.vagas.length} canceled={canceled}>
          40 min
        </Detail>
      </Hour>
      <Info>
        <OneLine>
          <Entypo
            name="location-pin"
            size={17}
            color={item.vagas.length || canceled ? '#fff' : '#444444'}
          />
          <DefaultText highlight={item.vagas.length} canceled={canceled}>
            {item.classes.place === '' ? 'Academia' : item.classes.place}
          </DefaultText>
        </OneLine>
        <OneLine>
          <MaterialIcons
            name="directions-run"
            size={17}
            color={item.vagas.length || canceled ? '#fff' : '#444444'}
          />
          <DefaultText highlight={item.vagas.length} canceled={canceled}>
            {item.classes.teacher}
          </DefaultText>
        </OneLine>
      </Info>
      {!canceled && (
        <Right>
          <DefaultText highlight={item.vagas.length}>
            {item.vacanciesFilled}/{item.classes.vacancies} vagas
          </DefaultText>
          {!item.haveClassToday &&
            !item.vagas.length &&
            active &&
            item.isAddOnClass && (
              <ItemButton type="add" onPress={() => handleAddClass()}>
                <TextButton>+</TextButton>
              </ItemButton>
            )}
        </Right>
      )}
    </Class>
  );
};

export default ClassItem;
