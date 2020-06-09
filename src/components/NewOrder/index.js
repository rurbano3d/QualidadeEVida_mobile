import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { orderRequest } from '~/store/modules/order/actions';

import { Container, Content, FormInput, Form, SubmitButton } from './styles';

const Order = ({ sector, sector_id, disabled, onRefresh }) => {
  const dispatch = useDispatch();
  const [question, setQuestion] = useState('');
  const { id } = useSelector(state => state.auth.student);

  async function handleSubmit() {
    dispatch(orderRequest(question, id, sector, sector_id));
    onRefresh(true);
  }

  return (
    <Container>
      <Content>
        <Form>
          <FormInput
            name="question"
            textAlignVertical="top"
            placeholder={
              disabled
                ? 'Espere uma resposta para digitar'
                : 'Digite seu mensagem'
            }
            numberOfLines={10}
            multiline
            value={!disabled ? question : ''}
            onChangeText={setQuestion}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            editable={!disabled}
          />

          <SubmitButton onPress={handleSubmit} disabled={disabled}>
            Enviar
          </SubmitButton>
        </Form>
      </Content>
    </Container>
  );
};

export default Order;
