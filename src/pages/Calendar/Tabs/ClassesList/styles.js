import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const Container = styled.View``;
export const Message = styled.Text`
  padding: 40px;
  color: #555;
  font-weight: bold;
  font-size: 18px;
`;
export const Header = styled.View`
  display: flex;
  align-items: center;
  background-color: #fff;
  margin: 8px 0;
  padding: 1px;
`;
export const HeaderText = styled.Text`
  font-size: 18px;
  font-weight: 500;
`;
export const List = styled.FlatList``;
