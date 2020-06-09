import styled from 'styled-components/native';
import {
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import { TextInputMask } from 'react-native-masked-text';
import { Platform } from 'react-native';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
  keyboardVerticalOffset: 120,
})`
  justify-content: center;
  height: 100%;
  margin: 0px 20px 0 20px;
`;
export const Label = styled.Text`
  font-size: 30px;
  padding: 20px 20px 50px 20px;
  color: #3a3a3a;
  text-align: center;
`;
export const Content = styled.ScrollView.attrs({
  centerContent: true,
})``;

export const PasswordView = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Seletor = styled(TouchableWithoutFeedback)`
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 4px;
  height: 60px;
  width: 60px;
  border: 1px solid #dddddd;
  border-left-width: 0px;
`;
export const InputMaskContainer = styled.View`
  align-items: center;
  padding: 0 15px;
  height: 60px;
  border-radius: 4px;
  border: 1px solid #dddddd;
  background-color: #fff;
`;
export const InputMask = styled(TextInputMask)`
  flex: 1;
  padding: 10px;
  font-size: 20px;
  color: #999999;

  width: 100%;
`;
export const SelectorBirth = styled(TouchableOpacity)`
  padding: 5px 15px;
  height: 60px;
  border-radius: 4px;
  border: 1px solid #dddddd;
  background-color: #fff;
`;
export const SelectorText = styled.Text`
  padding: 10px;
  font-size: 20px;
  color: #999999;
  margin-top: 2px;
  width: 100%;
`;
export const Error = styled.Text`
  padding: 5px;
`;
export const FormCustom = styled.View``;
export const ButtonView = styled.View`
  flex-direction: column;
  justify-content: space-between;
  margin-top: 20px;
`;

export const InputField = styled.View`
  padding-bottom: 10px;
`;

export const Placeholder = styled.Text`
  color: #ccc;
`;
