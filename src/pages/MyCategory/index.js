import React from 'react';

import Exercises from '~/pages/ExercisesRender';

export default function MyCategory() {
  return <Exercises renderButtonSeries ButtonRender={false} />;
}
