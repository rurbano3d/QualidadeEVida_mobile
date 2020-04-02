import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { UserButton } from './styles';

export default function User() {
  const navigation = useNavigation();

  return (
    <UserButton onPress={() => navigation.navigate('User', null)}>
      <AntDesign name="user" size={25} color="#53B1DA" />
    </UserButton>
  );
}
