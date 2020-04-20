import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 20px;
`;
export const Alerts = styled.View`
  align-items: center;
`;
export const Information = styled.View`
  flex-direction: row;
  height: 81px;
  margin-top: 20px;
  margin-bottom: 10px;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #dddddd;
  border-radius: 4px;
`;

export const DescView = styled.View`
  align-items: center;
  margin: 0 auto;
`;

export const PointText = styled.Text`
  color: #53b1da;
  font-size: 14px;
`;

export const Checkin = styled.FlatList`
  flex-grow: 0;
  background-color: #fff;
  border: 1px solid #dddddd;
  border-radius: 4px;
  margin-top: 20px;
  padding: 0 10px;
  margin-bottom: 210px;
`;

export const CheckinView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
`;
export const DataText = styled.Text``;

export const Warning = styled.Text`
  color: #fff;
  font-size: 18px;
`;

export const WarningView = styled.View`
  background-color: #cc3026;
  width: 100%;
  align-items: center;
  padding: 10px;
  border-radius: 4px;
`;
