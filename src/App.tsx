import {PermissionsAndroid} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getFineLocationPermission} from './shared/services/permission/get_fine_location_permission';
import {getCoords} from './shared/services/geolocation/get_coords.ts';
import {AppContext, AppState, initialAppState} from './AppContext';
import {LoaderComponent} from './shared/components/LoaderComponent';
import {NavigationContainer} from '@react-navigation/native';
import {PlacesListPage} from './modules/home/pages/PlacesListPage';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeNavigator} from './modules/home/HomeNavigator';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

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
        <Tab.Navigator initialRouteName="Home">
          <Tab.Screen
            name="Home"
            component={HomeNavigator}
            options={{
              headerShown: false,
              tabBarIcon: ({color, size}) => {
                return <Icon name="home" size={size} color={color} />;
              },
            }}
          />
          <Tab.Screen
            name="Places"
            component={PlacesListPage}
            options={{
              tabBarIcon: ({color, size}) => {
                return <Icon name="list" size={size} color={color} />;
              },
            }}
          />
        </Tab.Navigator>
      </AppContext.Provider>
    </NavigationContainer>
  );
};
