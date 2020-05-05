import React from 'react';
import { View, Text } from 'react-native';
import { WebView } from 'react-native-webview';

// import { Container } from './styles';

export default function WebViewFN() {
  return (
    <View style={{ flex: 1 }}>
      <Text>Aqui</Text>
      <WebView
        source={{
          uri: 'https://www.yahoo.com',
        }}
        startInLoadingState
        scalesPageToFit
        style={{
          width: 320,
          height: 300,
        }}
      />
    </View>
  );
}
