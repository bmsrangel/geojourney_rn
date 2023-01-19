import {AspectRatio, Box, Image, Pressable, Text} from 'native-base';
import React from 'react';
import {Place} from '../../../shared/types/place';

type PlacesListComponentProps = {
  place: Place;
  onPress: () => void;
};

export const PlaceCardComponent = ({
  onPress,
  place,
}: PlacesListComponentProps) => {
  return (
    <Pressable
      onPress={onPress}
      width="full"
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center">
      <Box
        padding="8px"
        borderColor="gray.500"
        borderWidth="1px"
        width="full"
        alignItems="flex-start"
        borderRadius="10px">
        {place.imageUrl ? (
          <AspectRatio ratio={320 / 240} width="full" borderRadius="10px">
            <Image
              src={place.imageUrl}
              alt={place.name}
              width="full"
              borderRadius="10px"
            />
          </AspectRatio>
        ) : (
          <Text alignSelf="center" marginBottom="8px">
            Imagem não definida
          </Text>
        )}
        <Text marginTop="8px" fontWeight="bold" fontSize="18px">
          {place.name}
        </Text>
        <Text>{new Date(place.date).toLocaleDateString('pt-BR')}</Text>
        <Text>{place.description || 'Descrição não fornecida'}</Text>
      </Box>
    </Pressable>
  );
};
