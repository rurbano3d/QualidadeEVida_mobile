import React from 'react';

import SeparatorList from '~/components/SeparatorList';
import ExercisesRender from '~/components/Exercise/Render';
import RunningsRender from '~/components/Running/Render';

import { List } from './styles';

export default function ExercisesFlatList({
  data,
  category,
  renderButtonSeries,
  hasVideo,
}) {
  return (
    <List
      data={data}
      ItemSeparatorComponent={SeparatorList}
      showsVerticalScrollIndicator={false}
      keyExtractor={item => String(item.id + item.title)}
      renderItem={({ item }) => (
        <>
          {item.exercises ? (
            <ExercisesRender
              item={item}
              hasVideo={hasVideo}
              category={category}
              renderButtonSeries={renderButtonSeries}
            />
          ) : (
            <RunningsRender
              item={item}
              hasVideo={hasVideo}
              category={category}
              renderButtonSeries={renderButtonSeries}
            />
          )}
        </>
      )}
    />
  );
}
