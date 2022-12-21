import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import userReducer from './user/userSlice';
import accommodationsReducer from './Accomodations/accommodations';
import reservationsReducer from './Reservations/reservations';

const store = configureStore({
  reducer: {
    reservations: reservationsReducer,
    accommodations: accommodationsReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
