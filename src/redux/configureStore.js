import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import accommodationsReducer from './Accomodations/accommodations';

const store = configureStore({
  reducer: {
    accommodations: accommodationsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
