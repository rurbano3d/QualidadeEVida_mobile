import React, { useState } from 'react';
import { Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { formatDateParse } from '~/utils';

import ButtonSeries from '~/components/Running/ButtonSeries';

import {
  Item,
  InfoView,
  ExerciseView,
  SeriesView,
  ExerciseText,
  SeriesText,
  DateView,
  Content,
  CongratulationsText,
} from './styles';

export default function RunningRender({ item, category, renderButtonSeries }) {
  const [finalized, setFinalizaded] = useState(false);
  function handleCompleted(value) {
    if (value) {
      setFinalizaded(true);
    } else {
      setFinalizaded(false);
    }
  }

  return (
    <Item>
      <ExerciseView>
        <ExerciseText>{item.title}</ExerciseText>
      </ExerciseView>
      <InfoView>
        <SeriesView>
          <MaterialCommunityIcons
            name="speedometer"
            size={20}
            color="#444444"
          />
          <SeriesText> {item.km} Km</SeriesText>
        </SeriesView>
        <DateView>
          {item.runnings[0].start_date ? (
            <>
              <SeriesView>
                <MaterialCommunityIcons
                  name="calendar-check"
                  size={20}
                  color="#444444"
                />
                <SeriesText>
                  {formatDateParse(item.runnings[0].start_date)}
                </SeriesText>
              </SeriesView>

              <SeriesView>
                <MaterialCommunityIcons
                  name="calendar-remove"
                  size={20}
                  color="#444444"
                />
                <SeriesText>
                  {formatDateParse(item.runnings[0].end_date)}
                </SeriesText>
              </SeriesView>
            </>
          ) : (
            <>
              <SeriesView>
                <MaterialCommunityIcons
                  name="calendar-blank"
                  size={20}
                  color="#444444"
                />
                <SeriesText>Livre</SeriesText>
              </SeriesView>
              <SeriesView />
            </>
          )}
        </DateView>
      </InfoView>

      {renderButtonSeries && (
        <Content finalized={finalized}>
          <ButtonSeries
            item={item}
            category={category}
            onCompleted={handleCompleted}
          />
        </Content>
      )}
      {finalized && (
        <>
          <CongratulationsText>
            {`Parabéns!! \nDesafio Completo`}
          </CongratulationsText>
        </>
      )}
    </Item>
  );
}
RunningRender.propTypes = {
  item: PropTypes.array.isRequired,
};
