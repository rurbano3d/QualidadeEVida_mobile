import React, { createContext, useContext } from 'react';

const ClientContext = createContext({});

export const ClientProvider = ({ children }) => {
  return (
    <ClientContext.Provider value={{ client: 'qualidadeVida' }}>
      {children}
    </ClientContext.Provider>
  );
};

export function useClient() {
  const context = useContext(ClientContext);
  return context;
}
