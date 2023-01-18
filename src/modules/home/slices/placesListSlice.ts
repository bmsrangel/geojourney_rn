import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Place} from '../../../shared/types/place';

const initialPlacesListState = {
  places: [] as Place[],
};

export const placesListSlice = createSlice({
  name: 'placesList',
  initialState: initialPlacesListState,
  reducers: {
    setPlacesList(state, action: PayloadAction<{places: Place[]}>) {
      state.places = action.payload.places;
    },
    addPlaceToList(state, action: PayloadAction<{newPlace: Place}>) {
      state.places = [action.payload.newPlace, ...state.places];
    },
  },
});

export const placesListActions = placesListSlice.actions;
export const placesListReducer = placesListSlice.reducer;
