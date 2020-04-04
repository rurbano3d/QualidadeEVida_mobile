import React from 'react';
import { Text } from 'react-native';

import ListSequence from '~/Animation/ListSequence';

import { Container, List, Row, Column, Title, Item } from './styles';

export default function Evaluation() {
  return (
    <Container>
      <List>
        <ListSequence time={100}>
          <Item>
            <Row>
              <Column>
                <Title>Massa magra</Title>
                <Text>18Kg</Text>
              </Column>
              <Column>
                <Title>Massa gorda</Title>
                <Text>25Kg</Text>
              </Column>
            </Row>
            <Row>
              <Column>
                <Title>% de gordura</Title>
                <Text>28%</Text>
              </Column>
              <Column>
                <Title>Data</Title>
                <Text>05/02/2020</Text>
              </Column>
            </Row>
          </Item>
        </ListSequence>
        <ListSequence time={200}>
          <Item>
            <Row>
              <Column>
                <Title>Massa magra</Title>
                <Text>18Kg</Text>
              </Column>
              <Column>
                <Title>Massa gorda</Title>
                <Text>25Kg</Text>
              </Column>
            </Row>
            <Row>
              <Column>
                <Title>% de gordura</Title>
                <Text>28%</Text>
              </Column>
              <Column>
                <Title>Data</Title>
                <Text>05/02/2020</Text>
              </Column>
            </Row>
          </Item>
        </ListSequence>
        <ListSequence time={300}>
          <Item>
            <Row>
              <Column>
                <Title>Massa magra</Title>
                <Text>18Kg</Text>
              </Column>
              <Column>
                <Title>Massa gorda</Title>
                <Text>25Kg</Text>
              </Column>
            </Row>
            <Row>
              <Column>
                <Title>% de gordura</Title>
                <Text>28%</Text>
              </Column>
              <Column>
                <Title>Data</Title>
                <Text>05/02/2020</Text>
              </Column>
            </Row>
          </Item>
        </ListSequence>
      </List>
    </Container>
  );
}
