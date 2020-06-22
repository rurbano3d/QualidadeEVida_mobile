import styled from 'styled-components/native';
import { Video } from 'expo-av';

export const Container = styled.View`
  align-items: center;
  margin: 20px;
`;

export const VideoCustom = styled(Video)`
  width: 240px;
  height: 180px;
  background-color: #000;
`;
