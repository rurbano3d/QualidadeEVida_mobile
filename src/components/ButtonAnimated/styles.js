import styled from 'styled-components/native';
import { Animated } from 'react-native';

export const ButtonCustom = styled(Animated.View)`
  margin: 10px 0 0 0;
  height: 50px;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;
