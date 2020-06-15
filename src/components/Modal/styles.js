import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.View`
  margin: 20px;
  background-color: #fff;
  border-radius: 20px;
  padding: 20px;
  align-items: center;
  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.5);
  elevation: 10;
  width: 80%;
`;

export const Title = styled.Text`
  font-weight: bold;
  padding: 20px 0;
  width: 100%;
  text-align: center;
  font-size: 16px;
`;
export const ButtonView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
`;
export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;
export const YesButton = styled.TouchableHighlight`
  background-color: ${props => props.theme.colors.primary};
  padding: 15px 30px;
  border-radius: 4px;
`;

export const NoButton = styled.TouchableHighlight`
  background-color: #f8333c;
  padding: 15px 30px;
  border-radius: 4px;
`;
