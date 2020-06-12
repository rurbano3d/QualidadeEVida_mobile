import styled from 'styled-components/native';

export const List = styled.FlatList`
  margin: 0px 20px;
  padding: 10px;

  margin-bottom: 50px;
`;

export const Item = styled.View`
  opacity: ${props => (props.finished ? '0.3' : '1')};
  flex-direction: row;
  justify-content: space-between;

  background-color: #009fe3;
  border: 1px solid #ddd;

  border-bottom-color: #eaeaea;
  border-bottom-width: 1px;

  align-items: center;
  margin-bottom: 10px;
`;

export const InfoView = styled.View`
  background-color: #fff;
  padding: 15px;
  margin-left: -50px;
  width: 80%;
`;
export const DateView = styled.View`
  align-items: center;
  justify-content: center;
  padding: 15px;
  width: 60px;
`;
export const DateText = styled.Text`
  width: 30px;
  text-align: center;
  color: #fff;
  font-size: 15px;
  text-transform: capitalize;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;
