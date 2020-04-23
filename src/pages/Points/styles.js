import styled from 'styled-components/native';

export const Container = styled.SafeAreaView``;

export const List = styled.FlatList`
  background-color: #fff;
  border: 1px solid #ddd;
  margin: 20px;
  padding: 10px;
`;

export const Item = styled.View`
  flex-direction: row;
  justify-content: space-between;

  padding: 15px;
  align-items: center;
`;
export const Information = styled.View`
  flex-direction: row;
  margin-top: 20px;
  margin: 20px;
  height: 81px;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #dddddd;
  border-radius: 4px;
`;

export const DescView = styled.View`
  align-items: center;
  margin: 0 auto;
`;

export const PointText = styled.Text`
  color: #53b1da;
  font-size: 15px;
`;
