import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView``;

export const List = styled.FlatList`
  background-color: #fff;
  border: 1px solid #ddd;
  margin: 20px;
  padding: 10px;
`;

export const Item = styled.View`
  padding: 15px;
  height: auto;
`;

export const ItemButton = styled(TouchableOpacity)`
  background-color: #cc3026;
  border-radius: 4px;
  padding: 5px 10px;
`;

export const TextButton = styled.Text`
  color: #fff;
`;
export const Top = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Bottom = styled.View`
  height: 5px;
`;

export const BottomText = styled.Text`
  font-size: 12px;
  color: #666;
`;
