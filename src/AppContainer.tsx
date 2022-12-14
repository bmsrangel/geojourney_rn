import {PermissionsAndroid} from 'react-native';
import React, {useEffect} from 'react';
import {getFineLocationPermission} from './shared/services/permission/get_fine_location_permission';
import {getCoords} from './shared/services/geolocation/get_coords.ts';
import {LoaderComponent} from './shared/components/LoaderComponent';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {AppNavigator} from './AppNavigator';
import {NativeBaseProvider} from 'native-base';
import {primaryColor} from './shared/constants/colors';
import {appActions, useAppDispatch, useAppSelector} from './appStore';
import {gql, useQuery} from './shared/utils/apolloClient';

export const AppContainer = () => {
  const isLoading = useAppSelector(state => state.app.isLoading);
  const isDarkThemeSelected = useAppSelector(
    state => state.app.isDarkThemeSelected,
  );

  const dispatch = useAppDispatch();

  const {loading, error, data} = useQuery(
    gql`
      query Login($email: String!, $password: String!) {
        users(
          where: {_and: {email: {_eq: $email}, password: {_eq: $password}}}
        ) {
          id
          first_name
          last_name
          email
        }
      }
    `,
    {
      variables: {
        email: 'jdoe@email.com',
        password: '123123',
      },
    },
  );

  console.log(data);

  useEffect(() => {
    getFineLocationPermission(PermissionsAndroid).then(isPermissionGranted => {
      if (isPermissionGranted) {
        getCoords().then(result => {
          if (result !== undefined) {
            dispatch(appActions.setCoordinate({coordinate: result}));
            dispatch(appActions.setIsLoading({isLoading: false}));
          }
        });
      }
    });
  }, []);

  const baseNavigationTheme = isDarkThemeSelected ? DarkTheme : DefaultTheme;

  const navigationTheme = {
    ...baseNavigationTheme,
    colors: {
      ...baseNavigationTheme.colors,
      primary: primaryColor,
    },
  };

  if (isLoading) {
    return (
      <NativeBaseProvider>
        <LoaderComponent />
      </NativeBaseProvider>
    );
  }

  return (
    <NativeBaseProvider>
      <NavigationContainer theme={navigationTheme}>
        <AppNavigator />
      </NavigationContainer>
    </NativeBaseProvider>
  );
};
