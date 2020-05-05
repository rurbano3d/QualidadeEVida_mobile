import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { SeriesView, SeriesText } from './styles';

export default function Amount({ item }) {
  return (
    <SeriesView>
      {item.amount ? (
        <>
          <MaterialCommunityIcons name="loop" size={20} color="#444444" />
          <SeriesText>{item.amount} reps</SeriesText>
        </>
      ) : (
        <>
          <MaterialCommunityIcons name="loop" size={20} color="#444444" />
          <SeriesText>{item.time} segundos</SeriesText>
        </>
      )}
    </SeriesView>
  );
}
