import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import fetchersReducer from '../features/fetchers/fetchersSlice';
import exchangeReducer from '../features/fetchers/fetchExchangeSlice';

const createStore = () =>
  configureStore({
    reducer: {
      counter: counterReducer,
      fetchers: fetchersReducer,
      exchange: exchangeReducer,
    },
  });

export default createStore;
