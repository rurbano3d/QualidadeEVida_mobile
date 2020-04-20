import React from 'react';

import { AntDesign } from '@expo/vector-icons';

import GrowUp from '~/Animation/GrowUp';

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
        <GrowUp>
          <AntDesign name="checkcircleo" size={20} color="#42CB59" />
        </GrowUp>
      ) : (
        <AntDesign name="checkcircleo" size={20} color="#afafaf" />
      )}
    </Container>
  );
}
