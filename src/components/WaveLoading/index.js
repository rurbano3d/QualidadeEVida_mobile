import React from 'react';
import { BarIndicator } from 'react-native-indicators';
import { useClient } from '~/contexts/client';
import { Container } from './styles';

export default function WaveLoading() {
  const { client } = useClient();
  return (
    <Container>
      <BarIndicator
        color={client === 'qualidadeVida' ? '#009fe3' : '#fb6c02'}
      />
    </Container>
  );
}
