import { combineReducers, configureStore } from '@reduxjs/toolkit';

import searchSlice from '../slices/search';

const reducers = combineReducers({
  search: searchSlice.reducer,
});

export const store = configureStore({
  reducer: reducers,
});
