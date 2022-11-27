import {Box} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {Coord} from '../../../shared/types/coord';
import {Place} from '../../../shared/types/place';
import {CustomMarkerComponent} from './CustomMarkerComponent';

type MapViewComponentProps = {
  region: Coord;
  onMapClick: (coordinate: Coord) => void;
  places: Place[];
};

export const MapViewComponent = ({
  region,
  onMapClick,
  places,
}: MapViewComponentProps) => {
  return (
    <Box width="full" height="full">
      <MapView
        region={{
          ...region,
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
        {places.map((place, index) => (
          <Marker coordinate={place.coordinate} key={index}>
            <CustomMarkerComponent name={place.name} />
          </Marker>
        ))}
      </MapView>
    </Box>
  );
};

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
  },
});
