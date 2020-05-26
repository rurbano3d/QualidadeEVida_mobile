import React from 'react';

import { Animated } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

export default function SlideTop({ children }) {
  const init = new Animated.Value(100);
  useFocusEffect(() => {
    Animated.spring(init, {
      toValue: 0,
      speed: 1,
      bounciness: 2,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View
      style={{
        transform: [{ translateY: init }],
        opacity: init.interpolate({
          inputRange: [0, 100],
          outputRange: [1, 0],
        }),
      }}
    >
      {children}
    </Animated.View>
  );
}
