import {Box, Row, Switch} from 'native-base';
import React from 'react';
import {Text} from 'react-native';
import {appActions, useAppDispatch, useAppSelector} from '../../../appStore';

export const ProfilePage = () => {
  // const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);
  const isDarkThemeSelected = useAppSelector(
    state => state.app.isDarkThemeSelected,
  );
  const dispatch = useAppDispatch();

  return (
    <Box padding="16px">
      <Row>
        <Text>Tema Escuro</Text>
        <Switch
          size="sm"
          isChecked={isDarkThemeSelected}
          onValueChange={value => {
            dispatch(appActions.setDarkMode({isDatkThemeSelected: value}));
          }}
        />
      </Row>
    </Box>
  );
};
