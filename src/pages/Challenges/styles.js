import styled from 'styled-components/native';
import { TouchableHighlight } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView``;

export const List = styled.View`
  background-color: #fff;
  border: 1px solid #ddd;
  margin: 20px;
  padding: 10px;
`;

export const Item = styled.View`
  flex-direction: row;
  justify-content: space-between;
  border-bottom-color: #eaeaea;
  border-bottom-width: 1px;
  padding: 15px;
  align-items: center;
  height: auto;
`;

export const ItemButton = styled(TouchableHighlight)`
  background-color: #42cb59;
  border-radius: 4px;
  padding: 5px 10px;
`;

export const TextButton = styled.Text`
  color: #fff;
`;
