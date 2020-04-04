import React from 'react';
import { useDispatch } from 'react-redux';
import { signOut } from '~/store/modules/auth/actions';

import { ExitButton, ExitText } from './styles';

export default function Exit() {
  const dispatch = useDispatch();

  function handleExit() {
    dispatch(signOut());
  }

  return (
    <ExitButton onPress={() => handleExit()}>
      <ExitText>Sair</ExitText>
    </ExitButton>
  );
}
