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
    const response = await fetch('http://127.0.0.1:3001/api/v1/reservations');
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
    const response = await fetch('http://127.0.0.1:3001/api/v1/reservations', {
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

export const getReservation = createAsyncThunk(
  GET_RESERVATION,
  async (reservationId) => {
    const response = await fetch(`http://127.0.0.1:3001/api/v1/reservations/${reservationId}`);
    if (response.ok) {
      return response.json();
    }
    throw response;
  },
);

export const deleteReservation = createAsyncThunk(
  DELETE_RESERVATION,
  async (reservationId) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`http://127.0.0.1:3001/api/v1/reservations/${reservationId}`, {
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
    builder
      .addCase(getReservations.fulfilled, (state, action) => ({
        reservations: action.payload.status.data,
        lifecycle: { loading: 'loaded' },
      }))
      .addCase(getReservations.rejected, (state) => ({
        ...state,
        lifecycle: { loading: 'rejected' },
      }))
      .addCase(createReservation.fulfilled, (state, action) => ({
        reservations: action.payload.status.data,
        lifecycle: { loading: 'loaded' },
      }))
      .addCase(createReservation.rejected, (state) => ({
        ...state,
        lifecycle: { loading: 'rejected' },
      }));
  },
});

export default reservationsSlice.reducer;
