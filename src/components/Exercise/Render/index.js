import React, { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

import Amount from '~/components/Exercise/Amount';
import ButtonSeries from '~/components/Exercise/ButtonSeries';

import {
  Item,
  InfoView,
  ExerciseView,
  SeriesView,
  ExerciseText,
  SeriesText,
} from './styles';

export default function ExercisesRender({ item, category }) {
  const [finalized, setFinalizaded] = useState(false);
  function handleCompleted(onCompleted) {
    if (!onCompleted) {
      setFinalizaded(true);
    } else {
      setFinalizaded(false);
    }
  }

  return (
    <Item finalized={finalized}>
      <ExerciseView>
        <ExerciseText>{item.title}</ExerciseText>
      </ExerciseView>
      <InfoView>
        <SeriesView>
          <MaterialCommunityIcons
            name="debug-step-over"
            size={20}
            color="#444444"
          />
          <SeriesText> {item.repetitions} séries</SeriesText>
        </SeriesView>
        <Amount item={item} />
      </InfoView>
      <ButtonSeries
        item={item}
        category={category}
        onCompleted={handleCompleted}
      />
    </Item>
  );
}
ExercisesRender.propTypes = {
  item: PropTypes.array.isRequired,
};
