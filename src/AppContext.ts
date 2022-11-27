import {createContext} from 'react';
import {Coord} from './shared/types/coord';

export type AppState = {
  isLoading: boolean;
  coordinate: Coord;
  isDarkThemeSelected: boolean;
};

export const initialAppState: AppState = {
  isLoading: true,
  coordinate: {
    latitude: 0,
    longitude: 0,
  },
  isDarkThemeSelected: false,
};

export const AppContext = createContext({
  appState: initialAppState,
  setAppState: (state: AppState) => {},
});
