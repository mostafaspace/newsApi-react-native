import React from 'react';
import NewsHome from '../../screens/news-home';
import AppSettings from '../../screens/app-settings';
import {useTranslation} from 'react-i18next';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabsParamList} from './types';
import AppStackNavigation from './AppStackNavigation';
import Icon from 'react-native-vector-icons/FontAwesome';

export default () => {
  const {t} = useTranslation('common');
  const Tab = createBottomTabNavigator<TabsParamList>();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="AppStack"
        options={{
          headerShown: false,
          tabBarLabel: t('tabs.news'),
          title: 'home',
          tabBarIcon: ({color, size}) => (
            <Icon name="newspaper-o" size={size} color={color} />
          ),
        }}
        component={AppStackNavigation}
      />
      <Tab.Screen
        name="AppSettings"
        options={{
          headerShown: false,
          tabBarLabel: t('tabs.app-settings'),
          tabBarIcon: ({color, size}) => (
            <Icon name="gear" size={size} color={color} />
          ),
        }}
        component={AppSettings}
      />
    </Tab.Navigator>
  );
};
