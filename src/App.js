import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import ErrorBoundary from '~/ErrorBoundary';

// import { Container } from './styles';
import Routes from '~/routes';

export default function App() {
  const signed = useSelector((state) => state.auth.signed);
  // const Routes = createRouter(signed);
  return (
    <ErrorBoundary>
      <NavigationContainer>
        <Routes signed={signed} />
      </NavigationContainer>
    </ErrorBoundary>
  );
}
