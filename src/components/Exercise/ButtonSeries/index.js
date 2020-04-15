import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { isToday, parseISO } from 'date-fns';

// import api from '~/services/api';

import {
  exercisesRequest,
  exercisesRemove,
} from '~/store/modules/exercises/actions';
import { seriesRequest, seriesRemove } from '~/store/modules/series/actions';
import GrowUp from '~/Animation/GrowUp';

import { Sequency, Repetition } from './styles';

export default function ButtonSeries({ item, category, onCompleted }) {
  const [exerciseCompleted, setExerciseCompleted] = useState(false);
  const [checkButtons, setCheckButtons] = useState([]);
  const dispatch = useDispatch();
  // const student = useSelector(state => state.auth.student);
  const exercisesCache = useSelector(state => state.exercises);
  const seriesCache = useSelector(state => state.series);
  console.log(seriesCache);
  const seriesCacheOnlyIsToday = seriesCache.filter(
    serie =>
      serie.category === category &&
      serie.exercise === item.id &&
      isToday(serie.date),
  );

  let repetitions = [];

  useEffect(() => {
    if (exercisesCache) {
      const exercisesCacheFilter = exercisesCache.filter(
        exercise =>
          exercise.exercise === item.id &&
          exercise.category === category &&
          isToday(exercise.date),
      );

      if (exercisesCacheFilter[0]) {
        setExerciseCompleted(true);
        onCompleted(exerciseCompleted);
      }
    }
    if (seriesCacheOnlyIsToday) {
      const positionArray = [];
      seriesCacheOnlyIsToday.map(serie => positionArray.push(serie.position));
      setCheckButtons(positionArray);
    }
  }, []);
  function createRepetitions(count) {
    repetitions = [];
    for (let i = 0; i < count; i += 1) {
      repetitions.push(i);
    }
    return repetitions;
  }

  function handleCheckIn(checkPosition) {
    console.tron.log(checkButtons);
    const find = checkButtons.find(position => position === checkPosition);
    console.tron.log(find);
    if (!find) {
      dispatch(seriesRequest(checkPosition, item.id, category));
      setCheckButtons([...checkButtons, checkPosition]);

      const size = seriesCacheOnlyIsToday.filter(
        serie => serie.exercise === item.id && serie.category === category,
      );

      if (size.length === repetitions.length - 1) {
        setExerciseCompleted(true);
        onCompleted(exerciseCompleted);
        dispatch(exercisesRequest(item.id, category));
      }
    }
  }
  function handleCheckOut(checkPosition) {
    if (exerciseCompleted) {
      dispatch(exercisesRemove(item.id, category));
      dispatch(seriesRemove(checkPosition, item.id, category));
      setExerciseCompleted(false);
      onCompleted(exerciseCompleted);
    } else {
      dispatch(seriesRemove(checkPosition, item.id, category));
    }
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
          {listCheck(rep) ? (
            <TouchableOpacity onPress={() => handleCheckOut(rep)}>
              <GrowUp>
                <AntDesign name="checkcircleo" size={25} color="#42CB59" />
              </GrowUp>
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
