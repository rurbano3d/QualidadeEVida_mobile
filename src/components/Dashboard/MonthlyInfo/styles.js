import styled from 'styled-components/native';

export const Container = styled.View``;
export const Warning = styled.Text`
  color: #fff;

  padding-left: 10px;
`;

export const NormalView = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px;
  margin: 0 10px;
`;

export const WarningView = styled.View`
  flex-direction: row;

  background-color: #f47b75;

  align-items: center;
  padding: 10px;
  margin: 0 10px;
  /* border-radius: 4px; */
`;

export const CustomText = styled.Text`
  padding-left: 10px;
  width: 100%;
`;

export const AlertView = styled.View`
  flex-direction: row;
  align-items: center;
  border: 1px solid #f47b75;
  background-color: #f4ebeb;

  align-items: center;
  padding: 10px;
  margin: 0 10px;
`;
