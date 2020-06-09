import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Content = styled.View`
  width: 49%;
  background-color: #fff;
  padding: 10px;
  border: 1px solid #dddddd;
`;
export const Title = styled.Text`
  margin-top: 10px;
  height: 35px;
  font-size: 13px;
  font-weight: bold;
  text-align: center;
`;
export const Info = styled.Text`
  height: 55px;
`;
export const Icon = styled.View`
  margin-top: -15px;
  align-self: flex-end;
`;
