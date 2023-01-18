import React from 'react';
import {AppContainer} from './AppContainer';
import {
  appPersistor,
  appStore,
  AppStorePersistGate,
  AppStoreProvider,
} from './appStore';
import {apolloClient, ApolloProvider} from './shared/utils/apolloClient';

export const App = () => {
  return (
    <AppStoreProvider store={appStore}>
      <AppStorePersistGate persistor={appPersistor}>
        <ApolloProvider client={apolloClient}>
          <AppContainer />
        </ApolloProvider>
      </AppStorePersistGate>
    </AppStoreProvider>
  );
};
