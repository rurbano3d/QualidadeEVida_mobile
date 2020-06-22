import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import api from '~/services/api';
import { PointText } from './styles';

const Pontuation = () => {
  const [points, setPoints] = useState([]);
  const student = useSelector(state => state.auth.student);

  async function getPoints() {
    const response = await api.get(`points/${student.id}`);
    setPoints(response.data);
  }

  useEffect(() => {
    getPoints();
  }, [student.id]);
  return <PointText>{points[0] ? points[0].totalScore : '0'} pontos</PointText>;
};

export default Pontuation;
