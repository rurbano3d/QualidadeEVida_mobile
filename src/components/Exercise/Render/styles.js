import styled from 'styled-components/native';

export const Item = styled.View`
  border-bottom-color: #eaeaea;
  border-bottom-width: 1px;
  padding: 0 15px;
  align-items: center;
`;

export const InfoView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 0 0 5px 0;
`;

export const ExerciseView = styled.View`
  align-items: flex-start;
  width: 100%;
  padding: 5px;
  margin-top: 2px;
  margin-bottom: 10px;
  border-radius: 4px;
  border-bottom-width: 2px;
  border-bottom-color: #53b1da;
`;

export const ExerciseText = styled.Text`
  font-weight: 500;
  font-size: 16px;
`;

export const SeriesView = styled.View`
  flex-direction: row;
  flex: 0.5;
`;

export const SeriesText = styled.Text`
  padding-left: 10px;
`;
