import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  margin: 20px 0;
`;

export const List = styled.View`
  background-color: #fff;

  margin-bottom: 10px;
  padding: 10px;
`;

export const Item = styled.View`
  flex-direction: row;
  justify-content: space-between;
  border-bottom-color: #eaeaea;
  border-bottom-width: 1px;
  padding: 15px;
  align-items: center;
`;

export const CustomText = styled.Text`
  font-size: 18px;
`;

export const ItemExit = styled.View`
  flex-direction: row;
  justify-content: space-between;

  padding: 15px;
  align-items: center;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 18px;
  padding: 10px 0 0 20px;
  color: ${props => props.theme.colors.primary};
  background-color: #fff;
`;

export const ButtonView = styled.View`
  margin: 0 20px;
`;
