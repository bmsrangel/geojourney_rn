import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useContext} from 'react';
import {AppContext} from '../../AppContext';
import {HomePage} from './pages/HomePage';
import {RegisterPlacePage} from './pages/RegisterPlacePage';
import pages from './homePages.json';

const Stack = createNativeStackNavigator();

export const HomeNavigator = () => {
  const {appState} = useContext(AppContext);

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name={pages.home} component={HomePage} />
      <Stack.Screen name={pages.register}>
        {_ => (
          <RegisterPlacePage
            latitude={appState.coordinate.latitude}
            longitude={appState.coordinate.longitude}
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};
