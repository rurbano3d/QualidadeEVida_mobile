import React from 'react';
import { BarIndicator } from 'react-native-indicators';

import { Container } from './styles';

export default function WaveLoading() {
  return (
    <Container>
      <BarIndicator color="#01d5f3" />
    </Container>
  );
}
