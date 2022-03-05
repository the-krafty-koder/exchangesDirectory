import axios from 'axios';
import { waitFor } from '@testing-library/react';
import {
  fetchExchange,
} from './fetchExchangeSlice';

import createStore from '../../app/store';

const store = createStore();

const exchangeId = 'binance';
const wrongId = 'finance';

describe('fetchExchange works when', () => {
  it('exchange fetched successfully', async () => {
    store.dispatch(fetchExchange({ exchangeId }));

    await waitFor(() => {
      expect(store.getState().exchangeProfile.fetch.status).toBe('fetched');
    });

    expect(
      store.getState().exchangeProfile.data.name
    ).toBeDefined();
  });

});
