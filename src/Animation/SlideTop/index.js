import React, { useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { Animated } from 'react-native';

export default function SlideTop({ children, execute }) {
  const isFocused = useIsFocused();
  const init = new Animated.Value(-100);

  useEffect(() => {
    if (isFocused) {
      Animated.spring(init, {
        toValue: 0,
        speed: 1,
        bounciness: 2,
        useNativeDriver: true,
      }).start(execute);
    }
  }, [isFocused]);

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
