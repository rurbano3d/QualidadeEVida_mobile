import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  margin: 20px;
`;

export const Content = styled.View`
  background-color: #fff;
  border: 1px solid #ddd;
  margin-bottom: 10px;
  padding: 10px;
`;

export const List = styled.View``;

export const Item = styled.View`
  flex-direction: row;
  justify-content: space-between;
  border-bottom-color: #eaeaea;
  border-bottom-width: 1px;
  padding: 15px;
  align-items: center;
`;

export const Title = styled.View`
  align-items: center;
`;

export const TitleText = styled.Text`
  font-weight: bold;
`;
