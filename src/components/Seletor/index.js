import React from 'react';
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';

import { Seletor } from './styles';

export default function SeletorComponent({ link, params, children }) {
  const navigation = useNavigation();
  return (
    <Seletor onPress={() => navigation.navigate(`${link}`, params)}>
      {children}
    </Seletor>
  );
}
SeletorComponent.propTypes = {
  link: PropTypes.string.isRequired,
  params: PropTypes.object,
  children: PropTypes.element.isRequired,
};

SeletorComponent.defaultProps = {
  params: null,
};
