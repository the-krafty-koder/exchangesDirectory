import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const apiEndpoint = process.env.API_ENDPOINT;

const options = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const fetchListOfExchanges = createAsyncThunk(
  'fetchers/fetchListOfExchanges',
  async (_, { rejectWithValue }) => {

      try {
        const response = await axios.get(
          `${apiEndpoint}/exchanges?page=1`,
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
  exchanges: {
    status: 'idle',
    error: null,
    data: [],
  },
};

const fetchersSlice = createSlice({
  name: 'fetchersSlice',
  initialState: initState,
  reducers: {},
  extraReducers: {
    //exchanges
    [fetchListOfExchanges.pending]: (state) => {
      state.exchanges.status = 'pending';
    },

    [fetchListOfExchanges.fulfilled]: (state, action) => {
      state.exchanges.status = 'fulfilled';
      state.exchanges.data = action.payload;
    },

    [fetchListOfExchanges.rejected]: (state, action) => {
      state.exchanges.status = 'failed';
      state.exchanges.data = action.error.message;
    },
  },
});

export default fetchersSlice.reducer;
