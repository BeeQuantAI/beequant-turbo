'use client';
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { client } from './apollo';

const ProviderWrapper: React.FC<React.PropsWithChildren<{}>> = ({
                                                                  children,
                                                                }) => {
  return (
    <ApolloProvider client={client}>{children}</ApolloProvider>
  );
};

export default ProviderWrapper;
