import {AppState} from '@store';

export const selectAllNews = (state: AppState) => state.news;

export const selectIsNewsLoading = (state: AppState) => state.news.isLoading;
