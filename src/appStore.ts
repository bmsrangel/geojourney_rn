import {configureStore} from '@reduxjs/toolkit';
import {appReducer} from './appSlice';
import {useDispatch, useSelector, TypedUseSelectorHook} from 'react-redux';
import {placesListReducer} from './modules/home/slices/placesListSlice';
import {userReducer} from './modules/home/slices/userSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';

export {Provider as AppStoreProvider} from 'react-redux';
export {PersistGate as AppStorePersistGate} from 'redux-persist/integration/react';
export {appActions} from './appSlice';

const persistConfig = {
  storage: AsyncStorage,
};

const persistedAppReducer = persistReducer(
  {
    ...persistConfig,
    key: 'app',
    blacklist: ['isLoading', 'coordinate'],
  },
  appReducer,
);

const persistedUserReducer = persistReducer(
  {
    ...persistConfig,
    key: 'user',
  },
  userReducer,
);

export const appStore = configureStore({
  reducer: {
    app: persistedAppReducer,
    placesList: placesListReducer,
    user: persistedUserReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const appPersistor = persistStore(appStore);

export type AppStore = ReturnType<typeof appStore.getState>;

export const useAppSelector: TypedUseSelectorHook<AppStore> = useSelector;
export const useAppDispatch: () => typeof appStore.dispatch = useDispatch;
