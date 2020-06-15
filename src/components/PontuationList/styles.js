import styled from 'styled-components/native';

export const List = styled.FlatList`
  background-color: #fff;
  border: 1px solid #ddd;
  margin: 20px;
  padding: 10px;
`;
export const PointText = styled.Text`
  color: ${props => props.theme.colors.primary};
  font-size: 15px;
`;
export const Item = styled.View`
  flex-direction: row;
  justify-content: space-between;

  padding: 15px;
  align-items: center;
`;
