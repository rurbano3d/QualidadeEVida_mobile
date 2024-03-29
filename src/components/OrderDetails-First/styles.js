import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: center;
  align-items: center;

  padding: 20px;
  margin-bottom: 20px;
`;
export const Content = styled.ScrollView`
  height: 100%;
`;

export const Title = styled.Text`
  text-align: center;
  color: ${props => props.theme.colors.primary};
  padding: 20px 0;
  font-size: 25px;
`;
export const Subtitle = styled.Text`
  text-align: center;
  font-size: 20px;
  margin-bottom: 20px;
  line-height: 25px;
`;
export const Message = styled.Text`
  font-size: 15px;
  text-align: center;
  line-height: 20px;
`;
