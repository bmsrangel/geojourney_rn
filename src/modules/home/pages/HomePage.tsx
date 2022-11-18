import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {AppContext} from '../../../AppContext';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import MapView, {Marker} from 'react-native-maps';
import {LoaderComponent} from '../../../shared/components/LoaderComponent';
import {Place} from '../../../shared/types/place';
import {getPlaces} from '../../../shared/services/local_storage/places_service';
import {CustomMarkerComponent} from '../components/CustomMarkerComponent';
import {Coord} from '../../../shared/types/coord';
import {HomeStackParamsList} from './HomeStackParamsList';

const HomePageWrapper = styled.View`
  width: 100%;
  height: 100%;
`;

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
  },
});

export const HomePage = ({
  navigation,
}: NativeStackScreenProps<HomeStackParamsList>) => {
  const {appState, setAppState} = useContext(AppContext);
  const [savedPlaces, setSavedPlaces] = useState<Place[]>([]);

  useEffect(() => {
    getPlaces().then(setSavedPlaces);
  }, [savedPlaces]);

  const onMapClick = (coordinate: Coord) => {
    setAppState({
      ...appState,
      coordinate: coordinate,
    });
    navigation.navigate('register', {
      coordinates: coordinate,
    });
  };

  return appState.isLoading ? (
    <LoaderComponent />
  ) : (
    <HomePageWrapper>
      <MapView
        region={{
          ...appState.coordinate,
          latitudeDelta: 0.03,
          longitudeDelta: 0.03,
        }}
        style={styles.map}
        showsMyLocationButton={true}
        showsCompass={false}
        toolbarEnabled={false}
        showsUserLocation
        showsPointsOfInterest
        followsUserLocation
        onPoiClick={e => onMapClick(e.nativeEvent.coordinate)}
        moveOnMarkerPress={true}
        onPress={e => onMapClick(e.nativeEvent.coordinate)}>
        {savedPlaces.map((place, index) => (
          <Marker coordinate={place.coordinate} key={index}>
            <CustomMarkerComponent name={place.name} />
          </Marker>
        ))}
      </MapView>
    </HomePageWrapper>
  );
};
