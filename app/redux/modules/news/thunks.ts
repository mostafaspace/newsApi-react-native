import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosError} from 'axios';
import {getAllNews, searchNews} from './api';

export const getAllNewsAsync = createAsyncThunk<
  IFetchNewsResponse,
  void,
  {rejectValue: IThunkErrorResponse}
>('getAllNews', async (arg, thunkApi) => {
  try {
    const axiosResponse = await getAllNews();
    const res = axiosResponse.data;

    console.log('[getAllNews][get]', res);

    return res;
  } catch (error) {
    console.log('[getAllNews][error]', error as AxiosError, thunkApi);
  }
});

export const searchNewsAsync = createAsyncThunk<
  IFetchNewsResponse,
  ISearchNewsProps,
  {rejectValue: IThunkErrorResponse}
>('searchNews', async (arg, thunkApi) => {
  console.log(arg);
  try {
    const axiosResponse = await searchNews(arg.query);
    const res = axiosResponse.data;

    console.log('[getAllNews][get]', res);

    return res;
  } catch (error) {
    console.log('[getAllNews][error]', error as AxiosError, thunkApi);
  }
});
