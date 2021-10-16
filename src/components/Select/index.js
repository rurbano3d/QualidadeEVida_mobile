import React, { forwardRef } from 'react';
import Select from 'react-native-picker-select';

import { Container } from './styles';

const SelectComponent = ({ label, items, handleChange }, ref) => {
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

  return (
    <Container>
      <Select
        onValueChange={handleChange}
        placeholder={{
          label,
          value: '',
        }}
        ref={ref}
        items={items}
        useNativeAndroidPickerStyle={false}
        style={pickerStyle}
      />
    </Container>
  );
};

export default forwardRef(SelectComponent);
