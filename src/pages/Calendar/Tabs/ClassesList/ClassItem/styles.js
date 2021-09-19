import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Class = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => {
    if (props.highlight) {
      return '#009fe3';
    }
    if (props.canceled) {
      return '#E30613';
    }
    return '#fff';
  }};
  margin: 8px 0;
  padding: 20px 40px;
`;
export const Hour = styled.View`
  align-items: center;
  justify-content: space-between;
  width: 90px;
  height: 50px;
`;
export const Info = styled.View`
  display: flex;
  justify-content: center;
  width: 90px;
`;
export const Right = styled.View`
  display: flex;
  align-items: flex-end;
  width: 90px;
`;
export const OneLine = styled.View`
  display: flex;
  flex-direction: row;

  margin: 3px;
`;
export const Highlight = styled.Text`
  color: ${props => (props.highlight || props.canceled ? '#fff' : '#009fe3')};
  font-weight: bold;
  font-size: 18px;
`;
export const Detail = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: ${props => (props.highlight || props.canceled ? '#fff' : '#444444')};
`;

export const DefaultText = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: ${props => (props.highlight || props.canceled ? '#fff' : '#444444')};
`;

export const ItemButton = styled(TouchableOpacity)`
  background-color: ${props => (props.type === 'add' ? '#4bab5e' : '#F8333C')};
  border-radius: 4px;
  padding: 10px;
  display: flex;
  align-items: center;
  width: 40px;
  margin: 10px 0px;
`;
export const TextButton = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
