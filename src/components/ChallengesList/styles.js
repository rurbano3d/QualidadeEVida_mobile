import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const List = styled.FlatList`
  background-color: #fff;
  border: 1px solid #ddd;
  margin: 5px 20px;
  padding: 0 10px;
`;

export const Item = styled.View`
  margin: 5px 0;
  padding: 15px;

  height: auto;
`;

export const ItemButton = styled(TouchableOpacity)`
  /* #9FD356 */
  background-color: ${props => (props.type === 'add' ? '#009fe3' : '#F8333C')};
  border-radius: 4px;
  padding: 10px 15px;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export const Top = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Bottom = styled.View``;

export const BottomText = styled.Text`
  font-size: 12px;
  color: #666;
`;
