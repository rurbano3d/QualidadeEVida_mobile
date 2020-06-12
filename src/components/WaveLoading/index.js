import React from 'react';
import { BarIndicator } from 'react-native-indicators';

import { Container } from './styles';

export default function WaveLoading() {
  return (
    <Container>
      <BarIndicator color="#009fe3" />
    </Container>
  );
}
