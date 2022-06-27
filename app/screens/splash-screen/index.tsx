import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {useRootNavigation} from '../../config/navigation/types';
import {useTheme} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

const Splash = () => {
  const navigation = useRootNavigation();
  const {colors} = useTheme();
  const {t} = useTranslation('common');

  React.useEffect(() => {
    setTimeout(() => {
      navigation.replace('AppTabs');
    }, 1000);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <Text style={{color: colors.text}}>{t('welcome')}</Text>
    </View>
  );
};

export default Splash;
