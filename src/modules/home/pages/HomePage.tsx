import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {LoaderComponent} from '../../../shared/components/LoaderComponent';
import {Coord} from '../../../shared/types/coord';
import {HomeStackParamsList} from '../HomeStackParamsList';
import {MapViewComponent} from '../components/MapViewComponent';
import {Box} from 'native-base';
import {appActions, useAppDispatch, useAppSelector} from '../../../appStore';
import mapStyleDark from '../maps/mapStyleDark.json';
import mapStyleLight from '../maps/mapStyleLight.json';

export const HomePage = ({
  navigation,
}: NativeStackScreenProps<HomeStackParamsList>) => {
  const isLoading = useAppSelector(state => state.app.isLoading);
  const appCoordinate = useAppSelector(state => state.app.coordinate);
  const savedPlaces = useAppSelector(state => state.placesList.places);
  const isDarkThemeSelected = useAppSelector(
    state => state.app.isDarkThemeSelected,
  );

  const dispatch = useAppDispatch();

  const mapStyle = isDarkThemeSelected ? mapStyleDark : mapStyleLight;

  const onMapClick = async (coordinate: Coord) => {
    dispatch(appActions.setCoordinate({coordinate}));
    navigation.navigate('register', {
      coordinates: coordinate,
    });
  };

  return isLoading ? (
    <LoaderComponent />
  ) : (
    <Box width="full" height="full">
      <MapViewComponent
        region={appCoordinate}
        places={savedPlaces}
        onMapClick={onMapClick}
        mapStyle={mapStyle}
      />
    </Box>
  );
};
