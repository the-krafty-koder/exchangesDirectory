import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const apiEndpoint = process.env.REACT_APP_API_ENDPOINT;

const options = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const fetchExchange = createAsyncThunk(
  'fetchers/fetchExchange',
  async ({ exchangeId }, { rejectWithValue }) => {
    const apiUrl = `${apiEndpoint}/exchanges/${exchangeId}`;

    try {
      console.log('called');
      const response = await axios.get(apiUrl, options);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }

      return rejectWithValue(err.response.data);
    }
  }
);

export const initState = {
  fetch: {
    status: 'idle', // 'fetching', 'fetched', 'failed'
    resCode: null,
    error: null,
  },

  data: {
    name: '',
    year_established: '',
    country: '',
    description: '',
    url: '',
    image: '',
    facebook_url: '',
    reddit_url: '',
    trade_volume_24h_btc: 0,
    tickers: [],
  },
};

const exchangeProfileSlice = createSlice({
  name: 'exchangeProfile',
  initialState: initState,

  reducers: {},
  extraReducers: {
    // Fetch Exchange
    [fetchExchange.pending]: (state) => {
      state.fetch.status = 'fetching';
    },

    [fetchExchange.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.fetch.status = 'fetched';
    },

    [fetchExchange.rejected]: (state, action) => {
      state.fetch.status = 'failed';
      state.fetch.resCode = action.payload;
      state.fetch.error = action.error.message;
    },
  },
});

export default exchangeProfileSlice.reducer;

export const selectExchange = (state) => state.exchange.data;
