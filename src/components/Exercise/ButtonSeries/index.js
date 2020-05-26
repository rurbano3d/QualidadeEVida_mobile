import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { useDispatch, useSelector } from 'react-redux';
import { isToday, parseISO, parseJSON } from 'date-fns';

import api from '~/services/api';

import {
  completedRequest,
  completedRemove,
} from '~/store/modules/completed/actions';
import { seriesRequest, seriesRemove } from '~/store/modules/series/actions';

import { Sequency, Repetition } from './styles';

export default function ButtonSeries({ item, category, onCompleted }) {
  const [exerciseCompleted, setExerciseCompleted] = useState(false);
  const [checkButtons, setCheckButtons] = useState([]);
  const [completedId, setCompletedId] = useState('');
  const dispatch = useDispatch();
  const student = useSelector(state => state.auth.student);
  const registration = useSelector(state => state.auth.registration);

  const seriesCache = useSelector(state => state.series);

  let repetitions = [];

  useEffect(() => {
    const seriesCacheOnlyIsToday = seriesCache.filter(
      serie =>
        serie.category === category &&
        serie.exercise === item.id &&
        isToday(parseJSON(serie.date)),
    );
    if (seriesCacheOnlyIsToday) {
      const positionArray = [];
      seriesCacheOnlyIsToday.map(serie => positionArray.push(serie.position));
      setCheckButtons(positionArray);

      if (positionArray.length === repetitions.length) {
        setExerciseCompleted(true);
        onCompleted(exerciseCompleted);
      }
    }
    async function getChallegesCompleted() {
      const response = await api.get(`completed/${student.id}`, {
        params: {
          category,
          exercise_id: item.id,
        },
      });
      const challengesCompleted = response.data;

      if (
        isToday(parseISO(challengesCompleted[0]?.createdAt)) ||
        challengesCompleted[0]?.category.end_date
      ) {
        setCompletedId(challengesCompleted[0].id);
        setExerciseCompleted(true);
        onCompleted(false);
      } else {
        onCompleted(true);
      }
    }
    getChallegesCompleted();
  }, []);
  function createRepetitions(count) {
    repetitions = [];
    for (let i = 0; i < count; i += 1) {
      repetitions.push(i);
    }
    return repetitions;
  }

  function handleCheckIn(checkPosition) {
    const find = checkButtons.find(position => position === checkPosition);

    if (!find) {
      dispatch(seriesRequest(checkPosition, item.id, category));
      setCheckButtons([...checkButtons, checkPosition]);

      if (checkButtons.length === repetitions.length - 1) {
        setExerciseCompleted(true);
        onCompleted(exerciseCompleted);
        dispatch(
          completedRequest(
            student.id,
            registration.id,
            category,
            item.id,
            null,
          ),
        );
      }
    }
  }
  function handleCheckOut(checkPosition) {
    // if (exerciseCompleted) {
    //   // dispatch(completedRemove(completedId));
    //   // setExerciseCompleted(false);
    //   onCompleted(exerciseCompleted);
    // }
    dispatch(seriesRemove(checkPosition, item.id, category));
    setCheckButtons(checkButtons.filter(check => check !== checkPosition));
  }
  function listCheck(checkPosition) {
    const result = checkButtons.find(check => check === checkPosition);

    if (result !== undefined) {
      return true;
    }
    return false;
  }

  return (
    <Sequency>
      {createRepetitions(item.repetitions).map(rep => (
        <Repetition key={rep}>
          {listCheck(rep) && !exerciseCompleted ? (
            <TouchableOpacity onPress={() => handleCheckOut(rep)}>
              <AntDesign name="checkcircleo" size={25} color="#42CB59" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => handleCheckIn(rep)}>
              <AntDesign name="checkcircleo" size={25} color="#afafaf" />
            </TouchableOpacity>
          )}
        </Repetition>
      ))}
    </Sequency>
  );
}
