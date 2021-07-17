import React from 'react';
import { View } from 'react-native';

import CheckList from '~/components/Dashboard/CheckList';
import Welcome from '~/components/Dashboard/Welcome';
import BlockedAccess from '~/components/Dashboard/BlockedAccess';
import Registration from '~/components/Dashboard/Registration';

// import { Container } from './styles';

const Render = ({ register }) => {
  if (!register) {
    return <Welcome />;
  }
  if (register.blockedAccess) {
    return <BlockedAccess />;
  }
  if (!register.active) {
    return <Registration />;
  }
  return <></>;
};

export default Render;
