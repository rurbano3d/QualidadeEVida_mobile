import styled from 'styled-components/native';

export const Container = styled.ScrollView``;
export const Header = styled.View`
  margin-top: 10px;
`;

export const Information = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 10px;
`;
export const Content = styled.View`
  flex: 1;
  margin-bottom: 20px;
`;

export const DescView = styled.View`
  align-items: flex-end;
  flex: 0.5;
  border-left-width: 1px;
  border-left-color: #ddd;
`;
export const UserView = styled.View`
  align-items: flex-start;
  flex: 0.5;
`;
export const UserText = styled.Text`
  font-size: 16px;
`;

export const PointView = styled.View`
  align-items: center;
  margin: 0 auto;
`;

export const PointText = styled.Text`
  color: ${props => props.theme.colors.primary};
  font-size: 14px;
`;

export const Top = styled.View`
  background: #fff;
`;
