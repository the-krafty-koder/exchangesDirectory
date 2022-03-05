import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const apiEndpoint = process.env.API_ENDPOINT;

const options = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const fetchExchange = createAsyncThunk(
  'fetchers/fetchExchange',
  async ({ exchangeId }, { rejectWithValue }) => {
      try {
        const response = await axios.get(
          `${apiEndpoint}/exchanges/${exchangeId}`,
          options
        );
        return response.data;
      }catch (err) {
        if (!err.response) {
          throw err;
        }

        return rejectWithValue(err.response);
      };
    }
);

export const initState = {
  fetch: {
    status: 'idle', // 'fetching', 'fetched', 'failed'
    resCode: null,
    error: null,
  },

  data: {},
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
