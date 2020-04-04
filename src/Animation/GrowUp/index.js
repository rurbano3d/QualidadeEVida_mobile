import React, { useEffect } from 'react';

import { Animated } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

export default function GrowUp({ children }) {
  const isFocused = useIsFocused();
  const init = new Animated.Value(0);
  useEffect(() => {
    if (isFocused) {
      Animated.timing(init, {
        toValue: 1,
        duration: 300,
      }).start();
    }
  }, [isFocused]);

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
