import React from 'react';
import { useDispatch } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';

import { signOut } from '~/store/modules/auth/actions';

import { ExitButton } from './styles';

export default function Exit() {
  const dispatch = useDispatch();

  function handleExit() {
    dispatch(signOut());
  }

  return (
    <ExitButton onPress={() => handleExit()}>
      <Ionicons name="md-exit" size={25} color="#53B1DA" />
    </ExitButton>
  );
}
