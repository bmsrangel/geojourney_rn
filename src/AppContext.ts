import {createContext} from 'react';
import {Coord} from './shared/types/coord';

export type AppState = {
  isLoading: boolean;
  coordinate: Coord;
};

export const initialAppState = {
  isLoading: true,
  coordinate: {
    latitude: 0,
    longitude: 0,
  },
};

export const AppContext = createContext({
  appState: initialAppState,
  setAppState: (state: AppState) => {},
});
