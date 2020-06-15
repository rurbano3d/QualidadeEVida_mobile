import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useClient } from '~/contexts/client';

import { UserButton } from './styles';

export default function User() {
  const navigation = useNavigation();
  const { client } = useClient();

  return (
    <UserButton onPress={() => navigation.navigate('User', null)}>
      <AntDesign
        name="user"
        size={25}
        color={client === 'qualidadeVida' ? '#009fe3' : '#fb6c02'}
      />
    </UserButton>
  );
}
