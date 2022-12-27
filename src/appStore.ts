import {configureStore} from '@reduxjs/toolkit';
import {appReducer} from './appSlice';
import {useDispatch, useSelector, TypedUseSelectorHook} from 'react-redux';
import {placesListReducer} from './modules/home/slices/placesListSlice';

export {Provider as AppStoreProvider} from 'react-redux';
export {appActions} from './appSlice';

export const appStore = configureStore({
  reducer: {
    app: appReducer,
    placesList: placesListReducer,
  },
});

export type AppStore = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;

export const useAppSelector: TypedUseSelectorHook<AppStore> = useSelector;
export const useAppDispatch: () => typeof appStore.dispatch = useDispatch;
