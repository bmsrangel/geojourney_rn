import {Box, Text} from 'native-base';
import React from 'react';
import {primaryColor} from '../../../shared/constants/colors';

type CustomMarkerComponentProps = {
  name: string;
};

export const CustomMarkerComponent = ({name}: CustomMarkerComponentProps) => {
  return (
    <Box
      width="30px"
      height="30px"
      justifyContent="center"
      alignItems="center"
      borderRadius="20px"
      backgroundColor={primaryColor}>
      <Text fontSize="8px" fontWeight="500" textAlign="center" color="#fff">
        {name}
      </Text>
    </Box>
  );
};
