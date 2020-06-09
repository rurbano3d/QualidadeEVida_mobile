import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
  keyboardVerticalOffset: 200,
})`
  justify-content: center;
  align-items: stretch;
  margin: 20px;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ddd;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 16px;
  padding-bottom: 20px;
`;
