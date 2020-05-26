import styled from 'styled-components/native';
import { Video } from 'expo-av';

export const Container = styled.View`
  align-items: center;
  margin: 20px;
`;

export const VideoCustom = styled(Video)`
  border-radius: 5px;
  width: 300px;
  height: 200px;
  background-color: #000;
`;
