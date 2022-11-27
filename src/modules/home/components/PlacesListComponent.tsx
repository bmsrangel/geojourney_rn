import React from 'react';
import {FlatList, Pressable, Text} from 'native-base';
import {Place} from '../../../shared/types/place';

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
      renderItem={({item}) => (
        <Pressable
          onPress={() => onPress(item)}
          width="full"
          height="40px"
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center">
          <Text width="30%" fontSize="12px" color="#9a9a9a">
            {new Date(item.date).toLocaleDateString('pt-BR')}
          </Text>
          <Text width="70%" fontSize="14px" color="#9a9a9a">
            {item.name}
          </Text>
        </Pressable>
      )}
    />
  );
};
