import {PermissionsAndroid} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getFineLocationPermission} from './shared/services/permission/get_fine_location_permission';
import {getCoords} from './shared/services/geolocation/get_coords.ts';
import {AppContext, AppState, initialAppState} from './AppContext';
import {LoaderComponent} from './shared/components/LoaderComponent';
import {NavigationContainer} from '@react-navigation/native';
import {AppNavigator} from './AppNavigator';

export const App = () => {
  const [appState, setAppState] = useState<AppState>(initialAppState);
  useEffect(() => {
    getFineLocationPermission(PermissionsAndroid).then(isPermissionGranted => {
      if (isPermissionGranted) {
        getCoords().then(result => {
          if (result !== undefined) {
            setAppState({
              isLoading: false,
              coordinate: result,
            });
          }
        });
      }
    });
  }, []);

  if (appState.isLoading) {
    return <LoaderComponent />;
  }

  return (
    <NavigationContainer>
      <AppContext.Provider value={{appState, setAppState}}>
        <AppNavigator />
      </AppContext.Provider>
    </NavigationContainer>
  );
};
