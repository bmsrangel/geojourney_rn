import {configureStore} from '@reduxjs/toolkit';
import {appReducer} from './appSlice';
import {useDispatch, useSelector, TypedUseSelectorHook} from 'react-redux';
import {placesListReducer} from './modules/home/slices/placesListSlice';
import {userReducer} from './modules/home/slices/userSlice';

export {Provider as AppStoreProvider} from 'react-redux';
export {appActions} from './appSlice';

export const appStore = configureStore({
  reducer: {
    app: appReducer,
    placesList: placesListReducer,
    user: userReducer,
  },
});

export type AppStore = ReturnType<typeof appStore.getState>;

export const useAppSelector: TypedUseSelectorHook<AppStore> = useSelector;
export const useAppDispatch: () => typeof appStore.dispatch = useDispatch;
