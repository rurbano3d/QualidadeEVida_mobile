import styled from 'styled-components/native';
import { Video } from 'expo-av';

export const Container = styled.View`
  align-items: center;
  margin: 20px;
`;

export const VideoCustom = styled(Video)`
  width: ${props => props.width};
  height: ${props => props.height};
  background-color: #000;
`;
