import {Box, Pressable, Text} from 'native-base';
import React from 'react';
import {useAppSelector} from '../../appStore';
import {primaryColor, primaryColorDark} from '../constants/colors';

export type FilledButtonComponentProps = {
  label: string;
  onPressed?: () => void;
};

export const FilledButtonComponent = ({
  label,
  onPressed,
}: FilledButtonComponentProps) => {
  const isDarkThemeSelected = useAppSelector(
    state => state.app.isDarkThemeSelected,
  );

  return (
    <Pressable onPress={onPressed}>
      <Box
        backgroundColor={isDarkThemeSelected ? primaryColorDark : primaryColor}
        width="40%"
        height="40px"
        borderRadius="5px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        alignSelf="center">
        <Text color={'#fff'}>{label}</Text>
      </Box>
    </Pressable>
  );
};
