import {Box, Pressable, Text} from 'native-base';
import React from 'react';
import {primaryColor} from '../constants/colors';

export type FilledButtonComponentProps = {
  label: string;
  onPressed?: () => void;
};

export const FilledButtonComponent = ({
  label,
  onPressed,
}: FilledButtonComponentProps) => {
  return (
    <Pressable onPress={onPressed}>
      <Box
        backgroundColor={primaryColor}
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
