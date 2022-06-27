import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import NewsHome from '../../screens/news-home';
import NewsDetails from '../../screens/news-details';
import {AppStackParamList} from './types';

export default () => {
  const Stack = createNativeStackNavigator<AppStackParamList>();

  return (
    <Stack.Navigator
      initialRouteName="NewsHome"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="NewsHome" component={NewsHome} />
      <Stack.Screen name="NewsDetails" component={NewsDetails} />
    </Stack.Navigator>
  );
};
