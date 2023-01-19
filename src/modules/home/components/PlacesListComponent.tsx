import React from 'react';
import {Divider, FlatList} from 'native-base';
import {Place} from '../../../shared/types/place';
import {PlaceCardComponent} from './PlaceCardComponent';

type PlacesListComponentProps = {
  places: Place[] | undefined;
  onPress: (item: Place) => void;
};

export const PlacesListComponent = ({
  places,
  onPress,
}: PlacesListComponentProps) => {
  return (
    <FlatList<Place>
      data={places}
      ItemSeparatorComponent={() => (
        <Divider height="8px" backgroundColor="transparent" />
      )}
      renderItem={({item}) => (
        <PlaceCardComponent place={item} onPress={() => onPress(item)} />
      )}
    />
  );
};
