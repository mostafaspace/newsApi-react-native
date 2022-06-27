import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';
import createRootReducer from './reducers';
import {
  Provider,
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from 'react-redux';
// import {createWrapper} from 'next-redux-wrapper';

export const makeStore = () => {
  const store = configureStore({
    reducer: createRootReducer(),
    middleware: getDefaultMiddleware => {
      return getDefaultMiddleware({
        thunk: true,
        immutableCheck: true,
      });
    },
    devTools: true,
  });

  return {store};
};

export type AppStore = ReturnType<typeof makeStore>['store'];

export type AppState = ReturnType<AppStore['getState']>;

export type AppDispatch = ReturnType<typeof makeStore>['store']['dispatch'];

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

// export const createReduxWrapper = createWrapper;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export {Provider};
