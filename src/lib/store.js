/* eslint-disable no-shadow */
import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import searchSlice from '../slices/search';

const reducers = combineReducers({
  search: searchSlice.reducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});
