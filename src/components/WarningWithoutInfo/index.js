import React from 'react';
import { Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Warning } from './styles';

export default function WarningWithoutInfo({ message }) {
  return (
    <Warning>
      <MaterialCommunityIcons
        name="alert-circle-outline"
        size={70}
        color="#009fe3"
      />
      <Text style={{ fontSize: 15, width: 270, textAlign: 'center' }}>
        {message}
      </Text>
      <Text style={{ fontSize: 15 }}>Consulte seu professor!</Text>
    </Warning>
  );
}
