import React from 'react';
import { MaterialIndicator } from 'react-native-indicators';

import { Container } from './styles';

export default function Loading() {
  return (
    <Container>
      <MaterialIndicator color="#009fe3" />
    </Container>
  );
}
