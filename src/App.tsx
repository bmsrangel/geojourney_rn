import React from 'react';
import {AppContainer} from './AppContainer';
import {appStore, AppStoreProvider} from './appStore';
import {apolloClient, ApolloProvider} from './shared/utils/apolloClient';

export const App = () => {
  return (
    <AppStoreProvider store={appStore}>
      <ApolloProvider client={apolloClient}>
        <AppContainer />
      </ApolloProvider>
    </AppStoreProvider>
  );
};
