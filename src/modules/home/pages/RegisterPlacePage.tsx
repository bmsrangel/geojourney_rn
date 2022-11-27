import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Box, Input, Text} from 'native-base';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {FilledButtonComponent} from '../../../shared/components/FilledButtonComponent';
import {createPlace} from '../../../shared/services/local_storage/places_service';
import {HomeStackParamsList} from '../HomeStackParamsList';

const maxNameLength = 10;

export const RegisterPlacePage = ({
  route,
  navigation,
}: NativeStackScreenProps<HomeStackParamsList, 'register'>) => {
  const [placeName, setPlaceName] = useState<string>('');
  const {coordinates} = route.params;
  const {latitude, longitude} = coordinates;
  const date = new Date();

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
            createPlace({
              date,
              name: placeName,
              coordinate: {
                latitude,
                longitude,
              },
            });
            navigation.goBack();
          }}
        />
      </Box>
    </SafeAreaView>
  );
};
