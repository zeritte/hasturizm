/* eslint-disable no-param-reassign */
// Params are supposed to be reassigned with redux-toolkit, which uses Immer

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  departureLocation: null,
  arrivalLocation: null,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setDepartureLocation: (state, action) => {
      state.departureLocation = action.payload;
    },
    setArrivalLocation: (state, action) => {
      state.arrivalLocation = action.payload;
    },
  },
});

export default searchSlice;
