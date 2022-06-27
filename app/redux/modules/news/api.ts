import client from '../../../config/api';
import {I18nManager} from 'react-native';

export const getAllNews = async () => {
  console.log('[getAllNews][All]');

  return client().get<INews>(
    `/top-headlines?country=${I18nManager.isRTL ? 'ae' : 'us'}`,
  );
};

export const searchNews = async (query: string) => {
  console.log('[getAllNews][All]');

  return client().get<INews>(`/everything?q=${query}`);
};
