import {PermissionsAndroid} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getFineLocationPermission} from './shared/services/permission/get_fine_location_permission';
import {getCoords} from './shared/services/geolocation/get_coords.ts';
import {AppContext, AppState, initialAppState} from './AppContext';
import {LoaderComponent} from './shared/components/LoaderComponent';
import {RegisterPlacePage} from './modules/home/pages/RegisterPlacePage';

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
    <AppContext.Provider value={{appState, setAppState}}>
      {/* <HomePage /> */}
      <RegisterPlacePage
        latitude={appState.coordinate.latitude}
        longitude={appState.coordinate.longitude}
      />
      {/* <PlacesListPage /> */}
    </AppContext.Provider>
  );
};
