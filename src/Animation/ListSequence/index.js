import React, { useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { Animated } from 'react-native';

export default function ListSequence({ children, time, onRefresh }) {
  const isFocused = useIsFocused();
  const init = new Animated.Value(0);

  useEffect(() => {
    if (isFocused) {
      Animated.sequence([
        Animated.spring(init, {
          toValue: 0,
          useNativeDriver: true,
        }),

        Animated.delay(time),
        Animated.spring(init, {
          toValue: 1,
          speed: 1,
          bounciness: 4,
          useNativeDriver: true,
        }),
      ]).start(() => onRefresh());
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
