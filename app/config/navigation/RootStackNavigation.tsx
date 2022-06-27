import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Splash from '../../screens/splash-screen';
import AppTabNavigation from './AppTabNavigation';
import {RootStackParamList} from './types';

export default () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen
        name="AppTabs"
        options={{gestureEnabled: false}}
        component={AppTabNavigation}
      />
    </Stack.Navigator>
  );
};
