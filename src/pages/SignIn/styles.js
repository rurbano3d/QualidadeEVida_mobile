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
  margin-bottom: 30px;
`;
export const Form = styled.View``;
export const SignLink = styled.TouchableOpacity`
  margin-top: 20px;
`;
export const SignLinkText = styled.Text`
  color: #999;
  font-weight: bold;
  font-size: 16px;
  align-self: flex-end;
`;
