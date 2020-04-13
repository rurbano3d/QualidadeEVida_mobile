import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import PropTypes from 'prop-types';

import GrowUp from '~/Animation/GrowUp';

import { Sequency, Repetition } from './styles';

export default function ButtonSeries({ item }) {
  const [checks, setChecks] = useState([]);

  let repetitions = [];

  function createRepetitions(count) {
    repetitions = [];
    for (let i = 0; i < count; i += 1) {
      repetitions.push(i);
    }
    return repetitions;
  }

  function handleCheckIn(checkPosition) {
    const newCheck = {
      position: checkPosition,
    };

    const checksExists = checks.find((tes) => tes.position === checkPosition);

    if (!checksExists) {
      setChecks([...checks, newCheck]);
    }
  }
  function handleCheckOut(checkPosition) {
    const removeChecks = checks.filter(
      (check) => check.position !== checkPosition
    );
    setChecks(removeChecks);
  }

  function listCheck(checkPosition) {
    const result = checks.find((check) => check.position === checkPosition);

    if (result) {
      return true;
    }
    return false;
  }

  return (
    <Sequency>
      {createRepetitions(item.repetitions).map((rep) => (
        <Repetition key={rep}>
          {listCheck(rep, item.id) ? (
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
ButtonSeries.propTypes = {
  item: PropTypes.array.isRequired,
};
