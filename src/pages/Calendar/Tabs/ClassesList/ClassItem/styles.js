import styled from 'styled-components/native';

export const Class = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => (props.highlight ? '#009fe3' : '#fff')};
  margin: 8px 0;
  padding: 20px 40px;
`;
export const Hour = styled.View`
  align-items: center;
  justify-content: space-between;
  width: 90px;
  height: 50px;
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
  color: ${props => (props.highlight ? '#fff' : '#009fe3')};
  font-weight: bold;
  font-size: 18px;
`;
export const Detail = styled.Text`
  font-size: 12px;
  color: ${props => (props.highlight ? '#fff' : '#444444')};
`;

export const DefaultText = styled.Text`
  color: ${props => (props.highlight ? '#fff' : '#444444')};
`;
