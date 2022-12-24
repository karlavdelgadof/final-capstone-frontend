import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const POST_SIGNUP = 'react-capstone/POST_SIGNUP';
const POST_LOGIN = 'react-capstone/POST_LOGIN';
const DELETE_LOGOUT = 'react-capstone/DELETE_LOGOUT ';

const initialState = {
  user: [],
  lifecycle: { loading: 'initial' },
};

// const url = 'http://127.0.0.1:3001/';

export const userIsLogged = () => {
  const isLogged = localStorage.getItem('token');
  if (isLogged) return true;
  return false;
};

export const createUser = createAsyncThunk(
  POST_SIGNUP,
  async (user) => {
    const response = await fetch('http://127.0.0.1:3001/signup', {
      method: 'post',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    if (response.ok) {
      localStorage.setItem('token', response.headers.get('Authorization'));
      return response.json();
    }
    throw response;
  },
);

export const logInUser = createAsyncThunk(
  POST_LOGIN,
  async (user) => {
    const response = await fetch('http://127.0.0.1:3001/login', {
      method: 'post',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    if (response.ok) {
      localStorage.setItem('token', response.headers.get('Authorization'));
      return response.json();
    }
    throw response;
  },
);

export const logOutUser = createAsyncThunk(
  DELETE_LOGOUT,
  async () => {
    const token = localStorage.getItem('token');
    const response = await fetch('http://127.0.0.1:3001/logout', {
      method: 'delete',
      headers: {
        'content-type': 'application/json',
        Authorization: token,
      },
    });
    if (response.ok) {
      localStorage.removeItem('token');
      return response.json();
    }
    throw response;
  },
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUser.fulfilled, (state, action) => ({
        user: action.payload.status.data,
        lifecycle: { loading: 'loaded' },
      }))
      .addCase(createUser.rejected, (state) => ({
        ...state,
        lifecycle: { loading: 'rejected' },
      }))
      .addCase(logInUser.fulfilled, (state, action) => ({
        user: action.payload.status.data,
        lifecycle: { loading: 'loaded' },
      }))
      .addCase(logInUser.rejected, (state) => ({
        ...state,
        lifecycle: { loading: 'rejected' },
      }))
      .addCase(logOutUser.fulfilled, (state) => ({
        ...state,
        user: [],
        lifecycle: { loading: 'loaded' },
      }))
      .addCase(logOutUser.rejected, (state) => ({
        ...state,
        lifecycle: { loading: 'rejected' },
      }));
  },
});

export default userSlice.reducer;
