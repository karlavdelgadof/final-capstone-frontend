import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

const GET_RESERVATIONS = 'react-capstone/GET_RESERVATIONS';
const POST_RESERVATION = 'react-capstone/POST_RESERVATION';
const GET_RESERVATION = 'react-capstone/GET_RESERVATION';
const DELETE_RESERVATION = 'react-capstone/DELETE_RESERVATION';

const initialState = {
  reservations: [],
  lifecycle: { loading: 'initial' },
};

// const reservationsURL = 'http://127.0.0.1:3001/api/v1/reservations';
// const reservationURL = 'http://127.0.0.1:3001/api/v1/reservations/id';

export const getReservations = createAsyncThunk(
  GET_RESERVATIONS,
  async () => {
    const response = await fetch('http://127.0.0.1:3001/api/v1/accommodations');
    if (response.ok) {
      return response.json();
    }
    throw response;
  },
);

export const getReservation = createAsyncThunk(
  GET_RESERVATION,
  async () => {
    const response = await fetch('http://127.0.0.1:3001/api/v1/accommodations/id');
    if (response.ok) {
      return response.json();
    }
    throw response;
  },
);

export const createReservation = createAsyncThunk(
  POST_RESERVATION,
  async (reservation) => {
    const token = localStorage.getItem('token');
    const response = await fetch('http://127.0.0.1:3001/api/v1/accommodations', {
      method: 'post',
      headers: {
        'content-type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify(reservation),
    });
    if (response.ok) {
      return response.json();
    }
    throw response;
  },
);

export const deleteReservation = createAsyncThunk(
  DELETE_RESERVATION,
  async () => {
    const token = localStorage.getItem('token');
    const response = await fetch('http://127.0.0.1:3001/api/v1/accommodations/id', {
      method: 'delete',
      headers: {
        'content-type': 'application/json',
        Authorization: token,
      },
    });
    if (response.ok) {
      return response.json();
    }
    throw response;
  },
);

export const reservationsSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers to handle loading state as needed
    builder
      // .addCase(reserve.fulfilled, (state, action) => {
      //   //Create reservation
      //   state.push(action.payload);
      // })
      .addCase(getReservations.fulfilled, (state, action) => Object.entries(action.payload).map(
        ([id, [reservation]]) => ({ ...reservation, id }),
      ));
    // .addCase(cancelReservation.fulfilled, (state, action) => {
    // state.forEach((reservation) => {
    //     if (reservation.id === action.payload.id) {
    //       state.splice(state.indexOf(reservation), 1);
    //     }
    //   });
    // });
  },
});

export default reservationsSlice.reducer;
