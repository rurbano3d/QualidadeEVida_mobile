import React from 'react';
import { MaterialIndicator } from 'react-native-indicators';
import { useClient } from '~/contexts/client';

import { Container } from './styles';

export default function Loading() {
  const { client } = useClient();
  return (
    <Container>
      <MaterialIndicator
        color={client === 'qualidadeVida' ? '#009fe3' : '#fb6c02'}
      />
    </Container>
  );
}
