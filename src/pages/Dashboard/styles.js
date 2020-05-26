import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  padding: 20px 20px 0 20px;
`;
export const Header = styled.View`
  height: 10%;
`;
export const Info = styled.View`
  height: 15%;
`;
export const Information = styled.View`
  flex-direction: row;
  height: 81px;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #dddddd;
  border-radius: 4px;
`;
export const Content = styled.View`
  margin-top: 2%;
  height: 73%;
`;

export const DescView = styled.View`
  align-items: center;
  margin: 0 auto;
`;

export const PointText = styled.Text`
  color: #53b1da;
  font-size: 14px;
`;
