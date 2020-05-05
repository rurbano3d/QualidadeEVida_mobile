import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import './src/config/ReactotronConfig';
import Teste from '~/Teste';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Teste />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
