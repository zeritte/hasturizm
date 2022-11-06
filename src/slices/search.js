/* eslint-disable no-param-reassign */
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
        departure: action.payload.departure,
        arrival: action.payload.arrival,
        date: action.payload.date,
        passengerCount: action.payload.passengerCount,
        id: Date.now(),
      };
      state.previousSearches = [newRecord, ...state.previousSearches];
    },
  },
});

export default searchSlice;
