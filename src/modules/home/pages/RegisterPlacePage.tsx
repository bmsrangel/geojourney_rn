import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Box, Divider, ScrollView, Text} from 'native-base';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../../appStore';
import {FilledButtonComponent} from '../../../shared/components/FilledButtonComponent';
import {useMutation} from '../../../shared/utils/apolloClient';
import {CustomInputComponent} from '../components/CustomInputComponent';
import {HomeStackParamsList} from '../HomeStackParamsList';
import {registerFavoritePlace} from '../queries/registerFavoritePlace';
import {placesListActions} from '../slices/placesListSlice';

const maxNameLength = 10;

export const RegisterPlacePage = ({
  route,
  navigation,
}: NativeStackScreenProps<HomeStackParamsList, 'register'>) => {
  const [placeName, setPlaceName] = useState<string>('');
  const [placeDescription, setPlaceDescription] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string>('');
  const [errors, setErrors] = useState<any>({});
  const {coordinates} = route.params;
  const {latitude, longitude} = coordinates;
  const date = new Date();

  const user = useAppSelector(state => state.user.user);

  const dispatch = useAppDispatch();

  const [registerPlace] = useMutation(registerFavoritePlace);

  const validate = () => {
    if (placeName.length === 0) {
      setErrors({...errors, placeName: 'Campo obrigatório'});
      return false;
    }
    return true;
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <Box padding="16px" width="full" height="full" display="flex">
          <Text marginBottom="8px" color="#9a9a9a">
            Coordenada: {latitude.toFixed(3)}°, {longitude.toFixed(3)}°
          </Text>
          <CustomInputComponent
            value={date.toLocaleDateString('pt-BR')}
            color="#9a9a9a"
            editable={false}
          />
          <Divider height="8px" backgroundColor="transparent" />
          <CustomInputComponent
            placeholder="Nome do local"
            value={placeName}
            onChangeText={setPlaceName}
            maxLength={maxNameLength}
            numberOfLines={1}
            errorMessage={errors.placeName}
          />
          <Divider height="8px" backgroundColor="transparent" />
          <CustomInputComponent
            placeholder="Descrição"
            value={placeDescription}
            onChangeText={setPlaceDescription}
            maxLength={150}
          />
          <Divider height="8px" backgroundColor="transparent" />
          <CustomInputComponent
            placeholder="URL da imagem"
            value={imageUrl}
            onChangeText={setImageUrl}
          />
          <Divider height="24px" backgroundColor="transparent" />
          <FilledButtonComponent
            label="Registrar"
            onPressed={() => {
              if (validate()) {
                const variables = {
                  name: placeName,
                  date: date.toISOString(),
                  coordinate: {
                    latitude,
                    longitude,
                  },
                  description: placeDescription,
                  userId: user.id,
                };
                registerPlace({
                  variables,
                }).then(result => {
                  const newPlace = result.data.insert_favorite_places_one;
                  dispatch(placesListActions.addPlaceToList({newPlace}));
                });
                navigation.goBack();
              }
            }}
          />
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
};
