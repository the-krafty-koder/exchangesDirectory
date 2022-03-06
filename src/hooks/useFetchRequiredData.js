import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchListOfExchanges } from '../features/fetchers/fetchersSlice';
import { fetchExchange } from '../features/fetchers/fetchExchangeSlice';

const useFetchExchangesData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchListOfExchanges());
  }, [dispatch]);
};

const useFetchExchangeData = ({ exchangeId }) => {
  const dispatch = useDispatch();
  console.log(exchangeId);
  useEffect(() => {
    dispatch(fetchExchange({ exchangeId }));
  }, [dispatch, exchangeId]);
};

export { useFetchExchangesData, useFetchExchangeData };
