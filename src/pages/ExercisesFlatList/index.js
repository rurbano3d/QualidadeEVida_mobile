import React from 'react';

import SeparatorList from '~/components/SeparatorList';
import ExercisesRender from '~/components/Exercise/Render';
import RunningsRender from '~/components/Running/Render';

import { Container, List } from './styles';

export default function ExercisesFlatList({
  data,
  category,
  renderButtonSeries,
  type,
}) {
  return (
    <Container>
      <List
        data={data}
        ItemSeparatorComponent={SeparatorList}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <>
            {type === 'exercises' ? (
              <ExercisesRender
                item={item}
                category={category}
                renderButtonSeries={renderButtonSeries}
              />
            ) : (
              <RunningsRender
                item={item}
                category={category}
                renderButtonSeries={renderButtonSeries}
              />
            )}
          </>
        )}
      />
    </Container>
  );
}
