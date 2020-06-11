import styled from 'styled-components/native';

export const Container = styled.ScrollView``;
export const Header = styled.View``;
export const Info = styled.View`
  height: 80px;
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
  margin: 10px 0;
`;
export const Content = styled.View`
  flex: 1;
  margin-bottom: 20px;
`;

export const DescView = styled.View`
  align-items: center;
  margin: 0 auto;
`;

export const PointView = styled.View`
  align-items: center;
  margin: 0 auto;
  width: 150px;
`;

export const PointText = styled.Text`
  color: #53b1da;
  font-size: 14px;
`;
