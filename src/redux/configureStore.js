import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
// import nameReducer from './foldername/nameSlice';

const store = configureStore({
  reducer: {
    // reducername: nameReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
