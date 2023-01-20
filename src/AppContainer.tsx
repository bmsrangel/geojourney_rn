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
import {extendTheme, NativeBaseProvider} from 'native-base';
import {primaryColor, primaryColorDark} from './shared/constants/colors';
import {appActions, useAppDispatch, useAppSelector} from './appStore';
import {useLazyQuery} from './shared/utils/apolloClient';
import {userDecoder} from './shared/decoders/userDecoder';
import {userActions} from './modules/home/slices/userSlice';
import {loginQuery} from './modules/home/queries/loginQuery';
import {getPlacesByUserId} from './modules/home/queries/getPlacesByUserId';
import {placesDecoder} from './shared/decoders/placesDecoder';
import {placesListActions} from './modules/home/slices/placesListSlice';

import messaging from '@react-native-firebase/messaging';

export const AppContainer = () => {
  const isLoading = useAppSelector(state => state.app.isLoading);
  const isDarkThemeSelected = useAppSelector(
    state => state.app.isDarkThemeSelected,
  );

  const dispatch = useAppDispatch();

  const [getUserData, {loading}] = useLazyQuery(loginQuery);
  const [getFavoritePlaces] = useLazyQuery(getPlacesByUserId);

  useEffect(() => {
    messaging().getToken().then(console.log);
    getFineLocationPermission(PermissionsAndroid).then(
      async isPermissionGranted => {
        if (isPermissionGranted) {
          const {data} = await getUserData({
            variables: {
              email: 'brangel@email.com',
              password: '123123',
            },
          });
          const user = userDecoder(data);
          dispatch(userActions.setUser({user}));
          const placesResponse = await getFavoritePlaces({
            variables: {
              userId: user.id,
            },
          });
          const places = placesDecoder(placesResponse.data);
          dispatch(placesListActions.setPlacesList({places}));
          const coordinate = await getCoords();
          if (coordinate !== undefined) {
            dispatch(appActions.setCoordinate({coordinate}));
            dispatch(appActions.setIsLoading({isLoading: loading}));
          }
        }
      },
    );
  }, []);

  const baseNavigationTheme = isDarkThemeSelected ? DarkTheme : DefaultTheme;

  const navigationTheme = {
    ...baseNavigationTheme,
    colors: {
      ...baseNavigationTheme.colors,
      primary: isDarkThemeSelected ? primaryColorDark : primaryColor,
    },
  };

  const nativeBaseTheme = extendTheme({
    config: {
      initialColorMode: isDarkThemeSelected ? 'dark' : 'light',
    },
  });

  if (isLoading) {
    return (
      <NativeBaseProvider theme={nativeBaseTheme}>
        <LoaderComponent />
      </NativeBaseProvider>
    );
  }

  return (
    <NativeBaseProvider theme={nativeBaseTheme}>
      <NavigationContainer theme={navigationTheme}>
        <AppNavigator />
      </NavigationContainer>
    </NativeBaseProvider>
  );
};
