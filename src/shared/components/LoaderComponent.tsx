import {Box, Spinner} from 'native-base';
import React from 'react';

export const LoaderComponent = () => {
  return (
    <Box
      display="flex"
      width="full"
      height="full"
      justifyContent="center"
      alignItems="center">
      <Spinner size={32} />
    </Box>
  );
};
