import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 20px;
`;

export const List = styled.FlatList``;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
`;

export const Column = styled.View`
  align-items: center;
`;

export const Item = styled.View`
  background-color: #fff;
  border: 1px solid #ddd;
  margin-bottom: 20px;
  padding: 10px 20px;
`;

export const Title = styled.Text`
  font-weight: bold;
`;

export const Warning = styled.View`
  align-items: center;
  justify-content: center;
  height: 80%;
`;
