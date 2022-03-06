// const axios = jest.createMockFromModule('axios');
import axios from 'axios';

let reject = false;
let status = 0;
let statusText = false;
const setReject = (value, rejectStatus = 0, rejectStatusText = false) => {
  reject = value;
  status = rejectStatus;
  statusText = rejectStatusText;
};

const get = (url, options) => {
  let result = null;
  if (url.includes('exchanges')) {
    result = {
      data: {
        id: 'bitso',
        name: 'Bitso',
        year_established: 2014,
        country: 'Mexico',
        description: '',
        url: 'https://bitso.com',
        image:
          'https://assets.coingecko.com/markets/images/8/small/Bitso-icon-dark.png?1581909156',
        has_trading_incentive: false,
        trust_score: 10,
        trust_score_rank: 29,
        trade_volume_24h_btc: 568.1661449003254,
        trade_volume_24h_btc_normalized: 568.1661449003254,
      },
    };
  } else if (url.includes('binance')) {
    result = {
      id: 'bitso',
      name: 'Bitso',
      year_established: 2014,
      country: 'Mexico',
      description: '',
      url: 'https://bitso.com',
      image:
        'https://assets.coingecko.com/markets/images/8/small/Bitso-icon-dark.png?1581909156',
      has_trading_incentive: false,
      trust_score: 10,
      trust_score_rank: 29,
      trade_volume_24h_btc: 568.1661449003254,
      trade_volume_24h_btc_normalized: 568.1661449003254,
    };
  }

  return Promise.resolve(result);
};

const request = ({ method, url, data, options }) => {
  switch (method) {
    default:
      return get(url, options);
  }
};

axios.get = get;
axios.setReject = setReject;
axios.request = request;

module.exports = axios;
