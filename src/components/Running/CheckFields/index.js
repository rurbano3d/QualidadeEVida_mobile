import React from 'react';

import { AntDesign } from '@expo/vector-icons';

import { Container } from './styles';

export default function Fields({ data, info }) {
  function listCheck(checkPosition) {
    const result = info.find(check => check.position === checkPosition);

    if (result !== undefined) {
      return true;
    }
    return false;
  }
  return (
    <Container>
      {listCheck(data) ? (
        <AntDesign name="checkcircleo" size={20} color="#42CB59" />
      ) : (
        <AntDesign name="checkcircleo" size={20} color="#afafaf" />
      )}
    </Container>
  );
}
