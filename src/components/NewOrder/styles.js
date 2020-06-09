import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.SafeAreaView``;

export const Content = styled.View`
  padding: 20px 0;
`;

export const FormInput = styled.TextInput.attrs({
  placeholderTextColor: '#999999',
})`
  font-size: 16px;
  width: 100%;
  color: #333;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #dddddd;
  padding: 20px;
  height: 70px;
`;

export const Form = styled.View``;

export const SubmitButton = styled(Button)`
  width: 100%;
  margin-top: 20px;
`;
