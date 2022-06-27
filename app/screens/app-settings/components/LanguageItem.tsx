import React from 'react';
import {StyleSheet, TouchableOpacity, Text, I18nManager} from 'react-native';
import {Flexbox} from '../../../components/layouts';
import {useTheme} from '@react-navigation/native';
import onLanguageChange from '../../../helpers/onLanguageChange';
import {useTranslation} from 'react-i18next';

const LanguageItem = () => {
  const {t} = useTranslation('common');
  const {colors} = useTheme();

  const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.card,
      borderRadius: 16,
      paddingVertical: 16,
      paddingHorizontal: 16,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    text: {
      color: colors.text,
    },
  });

  return (
    <Flexbox fd="row" justifyContent={'space-between'} style={styles.container}>
      <Text style={styles.text}>{t('language')}</Text>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => onLanguageChange(I18nManager.isRTL ? 'en' : 'ar')}>
        <Text style={styles.text}>
          {I18nManager.isRTL ? t('english') : t('arabic')}
        </Text>
      </TouchableOpacity>
    </Flexbox>
  );
};

export default LanguageItem;
