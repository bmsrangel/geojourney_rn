import React, {useEffect, useState} from 'react';
import {FlatList, Text} from 'react-native';
import styled from 'styled-components/native';
import {getPlaces} from '../../../shared/services/local_storage/places_service';
import {Place} from '../../../shared/types/place';

export const PlacesListPage = () => {
  const [placesList, setPlacesList] = useState<Place[]>();

  useEffect(() => {
    getPlaces().then(setPlacesList);
  }, []);

  return (
    <ListWrapper>
      {placesList?.length === 0 ? (
        <Text>Nenhum local adicionado</Text>
      ) : (
        <FlatList<Place>
          data={placesList}
          renderItem={({item}) => <Text>{item.name}</Text>}
        />
      )}
    </ListWrapper>
  );
};

const ListWrapper = styled.View`
  padding: 16px;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
