import styled from 'styled-components';

export const TabCustom = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.active ? '#009fe3' : 'white')};
  border-radius: 4px;
  height: 100%;
  width: 120%;
`;

export const TextCustom = styled.Text`
  color: ${props => (props.active ? '#fff' : '#666666')};
  text-transform: uppercase;
  font-weight: 500;
  font-size: 16px;
  margin: 2px 0;
`;
