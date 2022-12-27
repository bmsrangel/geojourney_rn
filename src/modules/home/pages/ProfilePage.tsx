import {Box, Row, Switch} from 'native-base';
import React, {useState} from 'react';
import {Text} from 'react-native';

export const ProfilePage = () => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

  return (
    <Box padding="16px">
      <Row>
        <Text>Tema Escuro</Text>
        <Switch
          size="sm"
          isChecked={isDarkTheme}
          onValueChange={setIsDarkTheme}
        />
      </Row>
    </Box>
  );
};
