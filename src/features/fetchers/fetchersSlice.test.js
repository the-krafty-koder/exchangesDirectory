import axios from 'axios';
import { waitFor } from '@testing-library/react';

import {
  fetchExchange,
  fetchListOfExchanges,
} from './fetchersSlice';

import createStore from '../../app/store';

const store = createStore();

describe('Lookups works when', () => {
  it('fetches list of exchanges', async () => {
    store.dispatch(fetchListOfExchanges());
    const expectedData = {
      id: 'bitso',
      name: 'Bitso',
      year_established: 2014,
      country: 'Mexico',
      description: '',
      url: 'https://bitso.com',
      image: 'https://assets.coingecko.com/markets/images/8/small/Bitso-icon-dark.png?1581909156',
      has_trading_incentive: false,
      trust_score: 10,
      trust_score_rank: 29,
      trade_volume_24h_btc: 568.1661449003254,
      trade_volume_24h_btc_normalized: 568.1661449003254,
    };
    await waitFor(() => {
      expect(store.getState().fetchers.exchanges.data).toStrictEqual(expectedData);
    });
  });

});
