import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 20px;
`;
export const Content = styled.ScrollView`
  max-height: 100%;
`;

export const Title = styled.Text`
  text-align: center;
  color: #f8333c;
  padding: 20px 0;
  font-size: 25px;
`;
export const Subtitle = styled.Text`
  text-align: center;
  font-size: 20px;
  margin-bottom: 20px;
`;
export const Message = styled.Text`
  font-size: 15px;
  text-align: left;
  margin: 5px 0;
`;
