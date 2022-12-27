import React from 'react';
import {AppContainer} from './AppContainer';
import {appStore, AppStoreProvider} from './appStore';

export const App = () => {
  return (
    <AppStoreProvider store={appStore}>
      <AppContainer />
    </AppStoreProvider>
  );
};
