import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from '~/services/NavigationService';
import ErrorBoundary from '~/ErrorBoundary';
import { ClientProvider } from '~/contexts/client';

// import { Container } from './styles';
import Routes from '~/routes';

export default function App() {
  const signed = useSelector(state => state.auth.signed);

  // const Routes = createRouter(signed);
  return (
    <ErrorBoundary>
      <NavigationContainer ref={navigationRef}>
        <ClientProvider>
          <Routes signed={signed} />
        </ClientProvider>
      </NavigationContainer>
    </ErrorBoundary>
  );
}
