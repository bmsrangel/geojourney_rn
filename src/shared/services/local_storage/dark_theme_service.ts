import AsyncStorage from '@react-native-async-storage/async-storage';

const darkThemeKey = '@dark_theme_key';

export const getDarkThemeState = async (): Promise<boolean> => {
  const rawData = await AsyncStorage.getItem(darkThemeKey);
  if (rawData === null) {
    return false;
  } else {
    const isDarkTheme = JSON.parse(rawData);
    return isDarkTheme;
  }
};

export const storeDarkThemeState = async (appTheme: boolean): Promise<void> => {
  await AsyncStorage.setItem(darkThemeKey, JSON.stringify(appTheme));
};
