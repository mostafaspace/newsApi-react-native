/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  Appearance, I18nManager,
  Platform,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RootStack from './app/config/navigation/RootStackNavigation';
import './i18n.config';
import {makeStore, Provider} from '@store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from './i18n.config';
import RNRestart from 'react-native-restart';

const App = () => {
  const {store} = makeStore();
  const [colorScheme, setColorScheme] = React.useState(() =>
    Appearance.getColorScheme(),
  );

  //handling color scheme changes for dark mode
  const handleColorScheme = React.useCallback((theme) => {
    setColorScheme(theme.colorScheme);
  }, []);
  React.useEffect(() => {
    Appearance.addChangeListener(handleColorScheme);
  }, [handleColorScheme]);

  // //check for RTL for ar locale
  // AsyncStorage.getItem('locale').then((locale: string) => {
  //   if (locale) {
  //     if (locale === 'ar' && !I18nManager.isRTL) {
  //       I18nManager.forceRTL(true);
  //       RNRestart.Restart();
  //     }
  //     if (locale && i18n.language !== locale) {
  //       i18n.changeLanguage(locale);
  //     }
  //   } else {
  //     AsyncStorage.setItem('locale', 'en');
  //   }
  // });

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar
          barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
        />
        <SafeAreaProvider>
          <NavigationContainer
            theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <RootStack />
          </NavigationContainer>
        </SafeAreaProvider>
      </View>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
