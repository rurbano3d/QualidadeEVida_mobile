import React from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { Animated } from 'react-native';

export default function ListSequence({ children, onRefresh }) {
  const init = new Animated.Value(0);

  useFocusEffect(() => {
    Animated.spring(init, {
      toValue: 1,
      speed: 1,
      bounciness: 4,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View
      style={{
        transform: [{ scale: init }],
        opacity: init.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
        }),
      }}
    >
      {children}
    </Animated.View>
  );
}
