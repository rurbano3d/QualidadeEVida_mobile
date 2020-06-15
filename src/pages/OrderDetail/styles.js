import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
  keyboardVerticalOffset: 100,
})`
  padding: 10px;
  flex: 1;
`;

export const QuestionView = styled.View`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 10px;
  margin: 10px;
  width: 80%;
`;

export const AnswerView = styled.View`
  background-color: #f5fff5;
  border-radius: 4px;
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px;
  width: 80%;
  margin-left: 50px;
`;

export const Question = styled.Text``;
export const Answer = styled.Text``;
export const Name = styled.Text`
  color: #666;
  margin-bottom: 5px;
`;

export const AnswerDate = styled.Text`
  text-align: right;
  color: ${props => props.theme.colors.primary};
  font-size: 12px;
  padding-top: 10px;
`;

export const Message = styled.View``;

export const Top = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Remove = styled.TouchableOpacity`
  align-items: flex-end;
  width: 50px;
`;
