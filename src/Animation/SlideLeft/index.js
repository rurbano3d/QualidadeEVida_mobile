import React from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { Animated } from 'react-native';

export default function SlideLeft({ children }) {
  const init = new Animated.Value(-100);
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
        transform: [{ translateX: init }],
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
