import React, { useEffect } from 'react';
import {
  ActivityIndicator,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';
import PropTypes from 'prop-types';

import { Text, ButtonCustom } from './styles';

export default function ButtonAnimated({
  onPress,
  children,
  loading,
  color,
  ...rest
}) {
  const animatedValue = new Animated.Value(1);
  function handlePressIn() {
    Animated.spring(animatedValue, {
      toValue: 0.5,
    }).start();
  }

  function handlePressOut() {
    Animated.spring(animatedValue, {
      toValue: 1,
      friction: 3,
      tension: 40,
    }).start(() => onPress());
  }

  const animatedStyle = {
    transform: [{ scale: animatedValue }],
  };
  return (
    <TouchableWithoutFeedback
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <ButtonCustom color={color} style={animatedStyle} {...rest}>
        {loading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text>{children}</Text>
        )}
      </ButtonCustom>
    </TouchableWithoutFeedback>
  );
}

ButtonAnimated.propTypes = {
  children: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};

ButtonAnimated.defaultProps = {
  loading: false,
};
