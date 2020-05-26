import React from 'react';
import { useIsFocused } from '@react-navigation/native';
import ChallengesList from '~/components/ChallengesList';
import ListSequence from '~/Animation/ListSequence';

import { Container } from './styles';

export default function Challenges() {
  const isFocused = useIsFocused();
  return (
    <>
      {isFocused && (
        <Container>
          <ListSequence>
            <ChallengesList type="remove" />
          </ListSequence>
        </Container>
      )}
    </>
  );
}
