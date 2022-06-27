import {useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Splash: undefined;
  AppTabs: undefined;
};

export type TabsParamList = {
  AppStack: undefined;
  AppSettings: undefined;
};

export type AppStackParamList = {
  NewsHome: undefined;
  NewsDetails: {article: IArticle};
};

/**
 * Generic definitions of the screens props to map the screen props
 */
export const useRootNavigation = () =>
  useNavigation<NativeStackScreenProps<RootStackParamList>['navigation']>();

export const useTabNavigation = () =>
  useNavigation<NativeStackScreenProps<TabsParamList>['navigation']>();

export const useAppNavigation = () =>
  useNavigation<NativeStackScreenProps<AppStackParamList>['navigation']>();
