import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchListOfExchanges } from '../fetchers/fetchersSlice';
import { fetchExchange } from '../fetchers/fetchExchangeSlice';

const useFetchExchangesData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchListOfExchanges());
    }, [dispatch]);
};

const useFetchExchangeData = (exchangeId) => {
  const dispatch = useDispatch();

  // Profile
  useEffect(() => {
      dispatch(fetchExchange(exchangeId));
    }, [dispatch, exchangeId]);
};

export { useFetchExchangesData, useFetchExchangeData };
