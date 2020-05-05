import React, { useEffect } from 'react';

import { View } from 'react-native';

export default function Calc({ kms, info, onCompleted }) {
  let valueTotal = 0;
  useEffect(() => {
    info.map(item => {
      valueTotal += Number(item.textValue);
      if (valueTotal >= kms) {
        onCompleted(true);
      }
    });
  }, [info]);

  return <View />;
}
