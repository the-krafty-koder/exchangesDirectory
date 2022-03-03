// const axios = jest.createMockFromModule('axios');

import axios from 'axios';

let reject = false;
let useInterceptors = false;
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
      data: [
        {
          id: 'ex1',
          name: 'Ex1',
        },
        {
          id: 'ex2',
          name: 'Ex2',
        },
      ],
    };
  } else if (url.includes('ex1')) {
    result = {
      data: {
        name: 'Ex1',
        twitterHandle: 'ex1',
      },
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
