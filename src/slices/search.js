/* eslint-disable no-param-reassign */
// Params are supposed to be reassigned with redux-toolkit, which uses Immer

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  departureLocation: null,
  arrivalLocation: null,
  previousSearches: [],
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
    addSearchRecord: (state, action) => {
      const newRecord = {
        depreture: action.payload.depreture,
        arrival: action.payload.arrival,
        date: action.payload.date,
        passengerCount: action.payload.passengerCount,
      };
      state.previousSearches = [newRecord, ...state.previousSearches];
    },
  },
});

export default searchSlice;
