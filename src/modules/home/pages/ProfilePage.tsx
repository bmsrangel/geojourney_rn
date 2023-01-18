import {Box, Row, Switch, Text, useColorMode} from 'native-base';
import React from 'react';
import {appActions, useAppDispatch, useAppSelector} from '../../../appStore';

export const ProfilePage = () => {
  const isDarkThemeSelected = useAppSelector(
    state => state.app.isDarkThemeSelected,
  );
  const user = useAppSelector(state => state.user.user);

  const dispatch = useAppDispatch();

  const {toggleColorMode} = useColorMode();

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
      <Row>
        <Text>Tema Escuro</Text>
        <Switch
          size="sm"
          isChecked={isDarkThemeSelected}
          onValueChange={value => {
            toggleColorMode();
            dispatch(appActions.setDarkMode({isDatkThemeSelected: value}));
          }}
        />
      </Row>
    </Box>
  );
};
