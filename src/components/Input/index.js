import React, { forwardRef } from 'react';

import { Container, TInput } from './styles';

function Input({ style, icon, ...rest }, ref) {
  return (
    <Container style={style}>
      <TInput selectionColor="#dadada" {...rest} ref={ref} />
    </Container>
  );
}

export default forwardRef(Input);
