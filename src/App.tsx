import {PermissionsAndroid} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getFineLocationPermission} from './shared/services/permission/get_fine_location_permission';
import {getCoords} from './shared/services/geolocation/get_coords.ts';
import {AppContext, AppState, initialAppState} from './AppContext';
import {LoaderComponent} from './shared/components/LoaderComponent';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {AppNavigator} from './AppNavigator';
import {NativeBaseProvider} from 'native-base';
import {primaryColor} from './shared/constants/colors';

export const App = () => {
  const [appState, setAppState] = useState<AppState>(initialAppState);
  useEffect(() => {
    getFineLocationPermission(PermissionsAndroid).then(isPermissionGranted => {
      if (isPermissionGranted) {
        getCoords().then(result => {
          if (result !== undefined) {
            setAppState({
              ...appState,
              isLoading: false,
              coordinate: result,
            });
          }
        });
      }
    });
  }, []);

  const baseNavigationTheme = appState.isDarkThemeSelected
    ? DarkTheme
    : DefaultTheme;

  const navigationTheme = {
    ...baseNavigationTheme,
    colors: {
      ...baseNavigationTheme.colors,
      primary: primaryColor,
    },
  };

  if (appState.isLoading) {
    return (
      <NativeBaseProvider>
        <LoaderComponent />
      </NativeBaseProvider>
    );
  }

  return (
    <NativeBaseProvider>
      <NavigationContainer theme={navigationTheme}>
        <AppContext.Provider value={{appState, setAppState}}>
          <AppNavigator />
        </AppContext.Provider>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};
