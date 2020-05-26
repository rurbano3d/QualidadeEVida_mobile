import React, { useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { Animated, InteractionManager } from 'react-native';

export default function GrowUp({ children }) {
  const init = new Animated.Value(0);

  useFocusEffect(() => {
    Animated.timing(init, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [init]);

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
