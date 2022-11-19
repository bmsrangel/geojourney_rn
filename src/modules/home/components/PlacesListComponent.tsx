import React from 'react';
import {FlatList} from 'react-native';
import styled from 'styled-components/native';
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
        <ListTileWrapper onPress={() => onPress(item)}>
          <ListTilePrefix>
            {new Date(item.date).toLocaleDateString('pt-BR')}
          </ListTilePrefix>
          <ListTileTitle>{item.name}</ListTileTitle>
        </ListTileWrapper>
      )}
    />
  );
};

const ListTileWrapper = styled.TouchableOpacity`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ListTilePrefix = styled.Text`
  width: 30%;
  font-size: 12px;
`;

const ListTileTitle = styled.Text`
  width: 70%;
  font-size: 14px;
`;
