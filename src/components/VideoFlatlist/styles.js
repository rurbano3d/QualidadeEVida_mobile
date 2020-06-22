import styled from 'styled-components/native';

export const List = styled.FlatList`
  margin: 0px 20px;
  padding: 10px;

  margin-bottom: 50px;
`;

export const Item = styled.View`
  opacity: ${props => (props.finished ? '0.3' : '1')};

  /* background-color: ${props => props.theme.colors.primary}; */
  background-color:#fff;
  border: 1px solid #ddd;
  border-radius:4px;

  margin-bottom: 10px;
  min-height: 180px;
`;

export const InfoView = styled.View`
  background-color: #000;
  align-items: center;
  justify-content: center;
  margin-left: -50px;
  width: 80%;
  height: 180px;
`;

export const DateView = styled.View`
  align-items: center;
  justify-content: center;
  padding: 15px;
  width: 60px;
`;
export const DateText = styled.Text`
  width: 40px;
  text-align: center;
  color: #fff;
  font-size: 15px;
  text-transform: capitalize;
  margin-bottom: 10px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #666;
  text-transform: capitalize;
  width: 100%;
`;
export const Top = styled.View`
  padding: 10px;
`;
export const Bottom = styled.View`
  flex-direction: row;
  justify-content: space-between;

  background-color: ${props => props.theme.colors.primary};

  align-items: center;
`;
