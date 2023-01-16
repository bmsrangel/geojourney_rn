import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Box, Input, Text} from 'native-base';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../../appStore';
import {FilledButtonComponent} from '../../../shared/components/FilledButtonComponent';
import {useMutation} from '../../../shared/utils/apolloClient';
import {HomeStackParamsList} from '../HomeStackParamsList';
import {registerFavoritePlace} from '../queries/registerFavoritePlace';
import {placesListActions} from '../slices/placesListSlice';

const maxNameLength = 10;

export const RegisterPlacePage = ({
  route,
  navigation,
}: NativeStackScreenProps<HomeStackParamsList, 'register'>) => {
  const [placeName, setPlaceName] = useState<string>('');
  const {coordinates} = route.params;
  const {latitude, longitude} = coordinates;
  const date = new Date();

  const user = useAppSelector(state => state.user.user);
  const favoritePlaces = useAppSelector(state => state.placesList.places);

  const dispatch = useAppDispatch();

  const [registerPlace] = useMutation(registerFavoritePlace);

  return (
    <SafeAreaView>
      <Box padding="16px" width="full" height="full" display="flex">
        <Input
          borderColor="gray.500"
          color="#9a9a9a"
          marginBottom="8px"
          variant="underlined"
          value={date.toLocaleDateString('pt-BR')}
          editable={false}
        />
        <Input
          placeholder="Nome do local"
          value={placeName}
          onChangeText={setPlaceName}
          maxLength={maxNameLength}
          numberOfLines={1}
          placeholderTextColor="#9a9a9a"
          variant="underlined"
          borderColor="gray.500"
          focusOutlineColor="gray.500"
        />
        <Text alignSelf="flex-end" marginBottom="16px" color="#9a9a9a">
          {placeName.length}/{maxNameLength}
        </Text>
        <Text marginBottom="32px" color="#9a9a9a">
          Coordenada: {latitude}°, {longitude}°
        </Text>
        <FilledButtonComponent
          label="Registrar"
          onPressed={() => {
            const variables = {
              name: placeName,
              date: date.toISOString(),
              coordinate: {
                latitude,
                longitude,
              },
              userId: user.id,
            };
            registerPlace({
              variables,
            }).then(result => {
              const newPlace = result.data.insert_favorite_places_one;
              const updatedPlacesList = [...favoritePlaces, newPlace];
              dispatch(
                placesListActions.setPlacesList({places: updatedPlacesList}),
              );
            });
            navigation.goBack();
          }}
        />
      </Box>
    </SafeAreaView>
  );
};
