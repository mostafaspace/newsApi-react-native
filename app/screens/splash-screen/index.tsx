import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {useRootNavigation} from '../../config/navigation/types';
import {useTheme} from '@react-navigation/native';

const Splash = () => {
  const navigation = useRootNavigation();
  const {colors} = useTheme();

  React.useEffect(() => {
    setTimeout(() => {
      navigation.replace('AppTabs');
    }, 1000);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View style={styles.container}>
      <Text>Welcome</Text>
    </View>
  );
};

export default Splash;
