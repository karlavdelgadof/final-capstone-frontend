import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// const apiURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/q4jqYH5waNwpAMlI8Ds9/books';
const initialState = [
  {
    id: 1,
    user: {
      id: 1,
      name: 'Martha Vivatoska',
    },
    accommodation: 'This will be the accommodation description',
    start_date: '22/11/20',
    end_date: '22/12/20',
  },
];

// export const reserve = createAsyncThunk('reservations/reserve', async (reservation) => {
// const response = await axios.post(apiURL, reservation);
// if (response.status === 201) {
//   return reservation;
// }
// return response.data;
// });

export const getReservations = createAsyncThunk('reservations/getReservations', async () => {
// const response = await axios.get(apiURL);
// console.log(response.data)
// return response.data;
return initialState;
});

// export const cancelReservation = createAsyncThunk('reservations/cancelReservation',
//   async (reservation) => {
//   await axios.delete(`${apiURL}/${reservation.id}`);
//   return reservation;
// });

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
      ))
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
