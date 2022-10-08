/* eslint-disable no-param-reassign */
// Params are supposed to be reassigned with redux-toolkit, which uses Immer

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  departureLocation: null,
  arrivalLocation: null,
  previousSearchs: [],
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
    // setPreviousSearchs: (state, action) => {
    //   state.previousSearchs = action.payload;
    //   state.departureLocation = action.payload;
    //   // const newRecord = { arrivalLocation: state.arrivalLocation, departureLocation: state.departureLocation };
    //   // state.push(previousSearchs(newRecord));
    // },
  },
});

export default searchSlice;
