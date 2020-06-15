import React from 'react';
import { Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Warning } from './styles';
import { useClient } from '~/contexts/client';

export default function WarningWithoutInfo({ message }) {
  const { client } = useClient();
  return (
    <Warning>
      <MaterialCommunityIcons
        name="alert-circle-outline"
        size={70}
        color={client === 'qualidadeVida' ? '#009fe3' : '#fb6c02'}
      />
      <Text style={{ fontSize: 15, width: 270, textAlign: 'center' }}>
        {message}
      </Text>
      <Text style={{ fontSize: 15 }}>Consulte seu professor!</Text>
    </Warning>
  );
}
