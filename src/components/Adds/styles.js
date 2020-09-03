import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 10px 0;
  padding: 20px 0;
  background-color: #fff;
`;

export const Content = styled.View`
  align-items: center;
  justify-content: center;
`;
export const Buttons = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 40%;
`;
export const Title = styled.Text`
  margin: 10px 0;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: ${props => props.theme.colors.primary};
`;
export const Info = styled.Text`
  text-align: center;
  padding: 10px 20px;
`;
export const TouchableOpacityCustom = styled.TouchableOpacity``;

export const Line = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: #ddd;
  width: 90%;
  margin: 10px 0;
`;
