import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { useDispatch, useSelector } from 'react-redux';
import { parseISO, differenceInDays, isToday, parseJSON } from 'date-fns';

import api from '~/services/api';

import {
  runningRequest,
  runningRemove,
} from '~/store/modules/runnings/actions';

import {
  completedRequest,
  completedRemove,
} from '~/store/modules/completed/actions';

import Calc from '~/components/Running/Calc';
import CheckFields from '~/components/Running/CheckFields';

import { Sequency, FlatListCustom, TextInputCustom, Item } from './styles';

export default function ButtonSeries({ item: data, category, onCompleted }) {
  const dispatch = useDispatch();

  const student = useSelector(state => state.auth.student);
  const [registration, setRegistration] = useState([]);
  const runningsCache = useSelector(state => state.runnings);

  const [fillDays, setFillDays] = useState([]);
  const [textValue, setTextValue] = useState('');

  let repetitions = [];
  useEffect(() => {
    if (runningsCache) {
      const runningsCacheFilter = runningsCache.filter(
        running => running.running === data.id && running.category === category,
      );

      if (runningsCacheFilter) {
        setFillDays(runningsCacheFilter);
      }
    }

    async function getChallegesCompleted() {
      const register = await api.get('registrations', {
        params: { student_id: student.id },
      });
      setRegistration(register.data[0]);
      const response = await api.get(`completed/${student.id}`, {
        params: {
          category,
          running_id: data.id,
        },
      });

      if (response.data != '') {
        const today = isToday(parseISO(response.data[0].createdAt));
        if (data.runnings[0].end_date || today) {
          onCompleted(true);
        } else {
          onCompleted(false);
        }
      } else {
        onCompleted(false);
      }
    }
    getChallegesCompleted();
  }, []);
  function createRepetitions() {
    repetitions = [];
    const differenceInDaysCount = differenceInDays(
      parseISO(data.runnings[0].end_date),
      parseISO(data.runnings[0].start_date),
    );

    for (let i = 0; i < differenceInDaysCount + 1; i += 1) {
      repetitions.push(i);
    }
    return repetitions;
  }
  function handleFillDay(position) {
    if (textValue) {
      const positionExists = fillDays.find(day => day.position === position);
      if (!positionExists) {
        const fillDay = {
          running: data.id,
          category,
          textValue,
          position,
        };
        setFillDays([...fillDays, fillDay]);
        dispatch(runningRequest(fillDay));
        setTextValue('');
      }
    }
  }

  function handleCompleted(value) {
    onCompleted(value);
    if (value) {
      dispatch(
        completedRequest(student.id, registration.id, category, null, data.id),
      );
      dispatch(runningRemove(category, data.id));
    }
  }

  function handleCheckIn() {
    dispatch(
      completedRequest(student.id, registration.id, category, null, data.id),
    );
    onCompleted(true);
  }
  return (
    <>
      <Sequency>
        {createRepetitions().length <= 0 && (
          <TouchableOpacity onPress={() => handleCheckIn()}>
            <AntDesign name="checkcircleo" size={25} color="#afafaf" />
          </TouchableOpacity>
        )}
        <FlatListCustom
          data={createRepetitions()}
          keyExtractor={item => String(item)}
          renderItem={({ item }) => (
            <Item>
              <TextInputCustom
                placeholder="Km"
                value={fillDays[item] && fillDays[item].textValue}
                onChangeText={setTextValue}
                onEndEditing={() => handleFillDay(item)}
              />
              <Text>{item + 1}º Dia</Text>
              <CheckFields data={item} info={fillDays} />
            </Item>
          )}
          numColumns={4}
        />
      </Sequency>
      <Calc
        daysLimit={createRepetitions().length}
        kms={data.km}
        info={fillDays}
        onCompleted={handleCompleted}
      />
    </>
  );
}
