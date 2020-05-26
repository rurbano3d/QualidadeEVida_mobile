import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.View`
  flex: ${props => (props.hasVideo ? 0.6 : 0.9)};
`;

export const Item = styled.View``;
export const Info = styled.View`
  max-height: 80%;
`;
export const Title = styled.View`
  align-items: flex-start;
  height: 8%;
  margin: 20px 25px;
`;

export const TitleText = styled.Text`
  font-size: 25px;
  color: #201e1f;
  font-weight: bold;

  height: 35px;
`;

export const ButtonCustom = styled(Button)`
  margin: 20px 20px;
  width: 90%;
`;

export const VideoContainer = styled.View``;

export const Content = styled.View``;
