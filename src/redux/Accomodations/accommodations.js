// import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    description: 'This is a brand new tiny house with a loft design, dramatic windows, and soaring ceilings. Due to its strategic location in the valley of the volcanoes it provides unmatched 360 degree views of the mountains and night sky.',
    address: 'Nysatra Alsta 2, Orsundsbro, North Central, 749 63, 0171-46 60 08',
    photos: [
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
    ],
    location: {
      id: 1,
      country: 'Sweden',
      city: 'Orsundsbro',
    },
    pets: [
      {
        id: 1,
        name: 'Bubbles',
        size: 'medium',
        photos: ['https://picsum.photos/id/237/200/300', 'https://picsum.photos/id/237/200/300'],
        information: 'Bubbles is a loving, energetic cattle dog who loves all of your attention. She is a single child and expects to be with you all the time.',
        specie: 'dog'
      }
    ],
    user: {
      id: 1,
      name: 'Martha Vivatoska'
    },
  },
  {
    id: 2,
    description: 'This is a brand new tiny house with a loft design, dramatic windows, and soaring ceilings. Due to its strategic location in the valley of the volcanoes it provides unmatched 360 degree views of the mountains and night sky.',
    address: 'Nysatra Alsta 2, Orsundsbro, North Central, 749 63, 0171-46 60 08',
    photos: [
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
    ],
    location: {
      id: 2,
      country: 'Norway',
      city: 'Oslo',
    },
    pets: [
      {
        id: 2,
        name: 'Penny',
        size: 'small',
        photos: ['https://picsum.photos/id/237/200/300', 'https://picsum.photos/id/237/200/300'],
        information: 'Penny is a loving, energetic cattle cat who loves all of your attention. She is a single child and expects to be with you all the time.',
        specie: 'cat',
      }
    ],
    user: {
      id: 2,
      name: 'Cedric Tovsk',

    },
  },
  {
    id: 3,
    description: 'This is a brand new tiny house with a loft design, dramatic windows, and soaring ceilings. Due to its strategic location in the valley of the volcanoes it provides unmatched 360 degree views of the mountains and night sky.',
    address: 'Nysatra Alsta 2, Orsundsbro, North Central, 749 63, 0171-46 60 08',
    photos: [
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
    ],
    location: {
      id: 3,
      country: 'Turkey',
      city: 'Ankara',
    },
    pets: [
      {
        id: 3,
        name: 'Poppie',
        size: 'large',
        photos: ['https://picsum.photos/id/237/200/300', 'https://picsum.photos/id/237/200/300'],
        information: 'Bubbles is a loving, energetic cattle dog who loves all of your attention. She is a single child and expects to be with you all the time.',
        specie: 'dog'
      }
    ],
    user: {
      id: 3,
      name: 'Zair Sud'
    }
  },
  {
    id: 4,
    description: 'This is a brand new tiny house with a loft design, dramatic windows, and soaring ceilings. Due to its strategic location in the valley of the volcanoes it provides unmatched 360 degree views of the mountains and night sky.',
    address: 'Nysatra Alsta 2, Orsundsbro, North Central, 749 63, 0171-46 60 08',
    photos: [
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
    ],
    location: {
      id: 4,
      country: 'Mexico',
      city: 'Tulum',
    },
    pets: [
      {
        id: 4,
        name: 'Bruno',
        size: 'large',
        photos: ['https://picsum.photos/id/237/200/300', 'https://picsum.photos/id/237/200/300'],
        information: 'Bruno is a loving, energetic cattle dog who loves all of your attention. He is a single child and expects to be with you all the time.',
        specie: 'dog'
      }
    ],
    user: {
      id: 4,
      name: 'Fernando Orozco'
    }
  },
  {
    id: 5,
    description: 'This is a brand new tiny house with a loft design, dramatic windows, and soaring ceilings. Due to its strategic location in the valley of the volcanoes it provides unmatched 360 degree views of the mountains and night sky.',
    address: 'Nysatra Alsta 2, Orsundsbro, North Central, 749 63, 0171-46 60 08',
    photos: [
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
    ],
    location: {
      id: 5,
      country: 'France',
      city: 'Marseille',
    },
    pets: [
      {
        id: 5,
        name: 'Storm',
        size: 'medium',
        photos: ['https://picsum.photos/id/237/200/300', 'https://picsum.photos/id/237/200/300'],
        information: 'Storm is a loving, energetic lizard who loves all of your attention. She is a single child and expects to be with you all the time.',
        specie: 'lizard'
      }
    ],
    user: {
      id: 5,
      name: 'David Gobblet'
    }
  },

];

// const accommodationsURL = 'https://api.coinlore.net/api/tickers/?start=100&limit=100';

export const getAccommodations = createAsyncThunk('accommodations/getAccommodations', () => initialState);
// const response = await axios.get(accommodationsURL);
// return response.data;

export const accommodationsSlice = createSlice({
  name: 'accommodations',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers to handle loading state as needed
    builder
      .addCase(getAccommodations.fulfilled, (_state, action) => action.payload);
    // .addCase(getCoins.fulfilled, (state, action) => action.payload.data.map(
    //   (coin) => ({
    //     name: coin.name,
    //     symbol: coin.symbol,
    //     rank: coin.rank,
    //     id: coin.nameid,
    //     price: coin.price_usd,
    //     percent_change_24h: coin.percent_change_24h,
    //     percent_change_1h: coin.percent_change_1h,
    //     percent_change_7d: coin.percent_change_7d,
    //     price_btc: coin.price_btc,
    //     market_cap_usd: coin.market_cap_usd,
    //     volume24: coin.volume24,
    //     volume24a: coin.volume24a,
    //     csupply: coin.csupply,
    //   }
    //   ),
    // ));
  },
});

export default accommodationsSlice.reducer;
