import {combineReducers} from '@reduxjs/toolkit';
import newsSlice from '../../redux/modules/news/slice';

const createRootReducer = () => {
  return combineReducers({
    [newsSlice.name]: newsSlice.reducer,
  });
};

export default createRootReducer;
