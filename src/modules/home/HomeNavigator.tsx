import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useContext} from 'react';
import {AppContext} from '../../AppContext';
import {HomePage} from './pages/HomePage';
import {PlacesListPage} from './pages/PlacesListPage';
import {RegisterPlacePage} from './pages/RegisterPlacePage';

const Stack = createNativeStackNavigator();

export const HomeNavigator = () => {
  const {appState} = useContext(AppContext);

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="Register">
        {_ => (
          <RegisterPlacePage
            latitude={appState.coordinate.latitude}
            longitude={appState.coordinate.longitude}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="Places" component={PlacesListPage} />
    </Stack.Navigator>
  );
};
