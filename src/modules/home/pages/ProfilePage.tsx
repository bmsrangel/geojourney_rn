import {Box, Text} from 'native-base';
import React from 'react';
import {useAppSelector} from '../../../appStore';

export const ProfilePage = () => {
  const user = useAppSelector(state => state.user.user);

  return (
    <Box padding="16px">
      <Text fontSize="24px" fontWeight="semibold" _dark={{color: 'white'}}>
        {user.first_name} {user.last_name}
      </Text>
      <Text
        color="gray.600"
        _dark={{
          color: 'gray.300',
        }}>
        {user.email}
      </Text>
    </Box>
  );
};
