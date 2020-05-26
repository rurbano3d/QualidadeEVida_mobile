import styled from 'styled-components/native';
import Select from 'react-native-picker-select';

export const Container = styled.View`
  justify-content: center;
  padding: 0 15px;
  height: 60px;
  border-radius: 4px;
  border: 1px solid #dddddd;
  background-color: #fff;
`;

export const SelectCustom = styled(Select)`
  border: 1px solid red;
  flex: 1;
  padding: 10px;
  font-size: 20px;
  color: #999999;

  width: 100%;
`;
