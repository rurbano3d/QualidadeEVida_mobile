import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
  padding: 10px 0px;
`;
export const HeaderText = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;
export const List = styled.FlatList``;

export const ItemButton = styled(TouchableOpacity)`
  background-color: ${props => (props.type === 'add' ? '#4bab5e' : '#F8333C')};
  border-radius: 4px;
  padding: 15px;
  display: flex;
  width: 90%;
  align-items: center;
  margin: 10px auto;
`;
export const TextButton = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export const Selected = styled.View`
  display: flex;
`;
