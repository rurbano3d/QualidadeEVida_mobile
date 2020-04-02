import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  padding: 0 15px;
  height: 45px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #dddddd;
  align-items: center;
`;

export const TInput = styled.TextInput`
  flex: 1;
  font-size: 20px;
  color: #999999;
`;
