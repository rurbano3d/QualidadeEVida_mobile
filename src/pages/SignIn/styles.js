import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  justify-content: center;
  height: 100%;
  margin: 0px 20px 0 20px;
`;
export const Logo = styled.View`
  align-items: center;
  margin-top: -80px;
`;
export const Form = styled.View``;
