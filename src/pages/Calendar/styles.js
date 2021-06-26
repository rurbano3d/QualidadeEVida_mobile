import styled from 'styled-components/native';

export const Container = styled.View``;
export const Class = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  background-color: #fff;

  margin: 8px 0;
  padding: 20px 40px;
`;
export const Hour = styled.View`
  align-items: center;
  width: 90px;
`;
export const Info = styled.View`
  display: flex;
  justify-content: center;
  width: 90px;
`;
export const OneLine = styled.View`
  display: flex;
  flex-direction: row;

  margin: 3px;
`;
export const Highlight = styled.Text`
  color: #53b1da;
  font-weight: bold;
  font-size: 18px;
`;
export const Detail = styled.Text`
  font-size: 12px;
`;
