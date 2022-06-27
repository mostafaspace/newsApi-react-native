import React from 'react';
import {SafeAreaView} from 'react-native';
import styles from './styles';
import LanguageItem from './components/LanguageItem';

const AppSettings = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LanguageItem />
    </SafeAreaView>
  );
};

export default AppSettings;
