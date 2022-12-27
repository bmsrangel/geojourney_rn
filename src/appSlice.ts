import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialAppState = {
  isDarkThemeSelected: false,
  isLoading: true,
  coordinate: {
    latitude: 0,
    longitude: 0,
  },
};

export const appSlice = createSlice({
  name: 'app',
  initialState: initialAppState,
  reducers: {
    setDarkMode(state, action: PayloadAction<{isDatkThemeSelected: boolean}>) {
      state.isDarkThemeSelected = action.payload.isDatkThemeSelected;
    },
    setIsLoading(state, action: PayloadAction<{isLoading: boolean}>) {
      state.isLoading = action.payload.isLoading;
    },
    setCoordinate(
      state,
      action: PayloadAction<{
        coordinate: {
          latitude: number;
          longitude: number;
        };
      }>,
    ) {
      state.coordinate = action.payload.coordinate;
    },
  },
});

export const appActions = appSlice.actions;
export const appReducer = appSlice.reducer;
