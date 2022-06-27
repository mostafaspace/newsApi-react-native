import {ActionReducerMapBuilder} from '@reduxjs/toolkit';
import {INewsState, initialState} from './slice';
import {getAllNewsAsync, searchNewsAsync} from './thunks';

const handleRejectionReducer = (
  actionName: string,
  errorRes: IThunkErrorResponse | undefined,
  state: INewsState,
): INewsState => {
  console.log(`${actionName}[rejected]`, {
    stateStringified: JSON.stringify(state),
    errorRes,
  });

  console.log(`${actionName}[rejected] returning`, {
    ...state,
  });

  return {
    ...state,
    isLoading: false,
  };
};

const getAllNewsAsyncReducer = (
  builder: ActionReducerMapBuilder<INewsState>,
) => {
  builder
    .addCase(getAllNewsAsync.pending, state => {
      return {...state, isLoading: true};
    })
    .addCase(getAllNewsAsync.fulfilled, (state, action) => {
      console.log('[getAllNewsAsync.fulfilled]', {
        state,
        action,
      });

      state.articles = action.payload.articles;
      state.status = action.payload.status;
      state.isLoading = false;
    })
    // .addCase(getAllNewsAsync.rejected, () => initialState);
    .addCase(getAllNewsAsync.rejected, (state, action) =>
      handleRejectionReducer('[getAllNewsAsync]', action.payload, {
        ...state,
        status: null,
      }),
    );
};

const searchNewsAsyncReducer = (
  builder: ActionReducerMapBuilder<INewsState>,
) => {
  builder
    .addCase(searchNewsAsync.pending, state => {
      return {...state, isLoading: true};
    })
    .addCase(searchNewsAsync.fulfilled, (state, action) => {
      console.log('[getAllNewsAsync.fulfilled]', {
        state,
        action,
      });

      state.articles = action.payload.articles;
      state.status = action.payload.status;
      state.isLoading = false;
    })
    // .addCase(getAllNewsAsync.rejected, () => initialState);
    .addCase(searchNewsAsync.rejected, (state, action) =>
      handleRejectionReducer('[getAllNewsAsync]', action.payload, {
        ...state,
        status: null,
      }),
    );
};

export default [getAllNewsAsyncReducer, searchNewsAsyncReducer];
