import {I18nManager} from 'react-native';
import RNRestart from 'react-native-restart';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function onLanguageChange(language: string) {
  return AsyncStorage.getItem('locale').then((locale: string) => {
    if (locale !== language) {
      AsyncStorage.setItem('locale', language).then(() => {
        I18nManager.forceRTL(language === 'ar');
        RNRestart.Restart();
      });
    }
  });
}
