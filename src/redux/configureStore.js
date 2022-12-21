import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import accommodationsReducer from './Accomodations/accommodations';
import reservationsReducer from './Reservations/reservations';

const store = configureStore({
  reducer: {
    reservations: reservationsReducer,
    accommodations: accommodationsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
