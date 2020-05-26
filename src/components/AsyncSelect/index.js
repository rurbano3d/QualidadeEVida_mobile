import React, { useMemo, useState } from 'react';
import { View } from 'react-native';
import Select from 'react-native-picker-select';

import api from '~/services/api';

import { Container } from './styles';

const AsyncSelect = ({ gym, handleChange }) => {
  const [gyms, setGyms] = useState([]);
  const pickerStyle = {
    inputIOS: {
      color: '#999999',
      fontSize: 20,
      paddingLeft: 10,
    },
    inputAndroid: {
      color: '#999999',
      fontSize: 20,
      paddingLeft: 10,
    },
    placeholderColor: 'white',
    underline: { borderTopWidth: 0 },
  };

  useMemo(() => {
    async function getGyms() {
      const response = await api.get('gyms');

      const parseResponse = response.data.map(q => ({
        value: q.id,
        label: q.name,
      }));

      setGyms(parseResponse);
    }
    getGyms();
  }, []);
  return (
    <Container>
      <Select
        onValueChange={handleChange}
        placeholder={{
          label: 'Escolha sua academia',
        }}
        items={gyms && gyms}
        useNativeAndroidPickerStyle={false}
        style={pickerStyle}
      />
    </Container>
  );
};

export default AsyncSelect;
