// import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const GET_ACCOMMODATIONS = 'react-capstone/GET_ACCOMMODATIONS';
const POST_ACCOMMODATION = 'react-capstone/POST_ACCOMMODATION';
const GET_ACCOMMODATION = 'react-capstone/GET_ACCOMMODATION';
const DELETE_ACCOMMODATION = 'react-capstone/DELETE_ACCOMMODATION';

const initialState = {
  accommodations: [],
  locations: [],
  lifecycle: { loading: 'initial' },
};

// const accommodationsURL = 'http://127.0.0.1:3001/api/v1/accommodations';
// const accommodationURL = 'http://127.0.0.1:3001/api/v1/accommodations/id';
// const locationsURL = '';

export const getAccommodations = createAsyncThunk(
  GET_ACCOMMODATIONS,
  async () => {
    const response = await fetch('http://127.0.0.1:3001/api/v1/accommodations');
    if (response.ok) {
      return response.json();
    }
    throw response;
  },
);

export const getAccommodation = createAsyncThunk(
  GET_ACCOMMODATION,
  async () => {
    const response = await fetch('http://127.0.0.1:3001/api/v1/accommodations/id');
    if (response.ok) {
      return response.json();
    }
    throw response;
  },
);

export const createAccommodation = createAsyncThunk(
  POST_ACCOMMODATION,
  async (accommodation) => {
    const token = localStorage.getItem('token');
    const response = await fetch('http://127.0.0.1:3001/api/v1/accommodations', {
      method: 'post',
      headers: {
        'content-type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify(accommodation),
    });
    if (response.ok) {
      return response.json();
    }
    throw response;
  },
);

export const deleteAccommodation = createAsyncThunk(
  DELETE_ACCOMMODATION,
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

export const accommodationsSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createAccommodation.fulfilled, (state, action) => ({
        user: action.payload.status.data,
        lifecycle: { loading: 'loaded' },
      }))
      .addCase(createAccommodation.rejected, (state) => ({
        ...state,
        lifecycle: { loading: 'rejected' },
      }))
      .addCase(deleteAccommodation.fulfilled, (state) => ({
        ...state,
        user: [],
        lifecycle: { loading: 'loaded' },
      }))
      .addCase(deleteAccommodation.rejected, (state) => ({
        ...state,
        lifecycle: { loading: 'rejected' },
      }));
  },
});

export default accommodationsSlice.reducer;
