import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Icon } from 'semantic-ui-react';

import { coinHeader, priceContent, spread } from './index.css';

const CoinInfo = ({ coinData }) => (
  <Grid>
    <Grid.Column width={2}>
      <Icon bordered color="teal" name="btc" size="large" />
    </Grid.Column>
    <Grid.Column width={8}>
      <Grid>
        <Grid.Column width={12}>
          <p style={coinHeader}>
            {coinData.base}/{coinData.target}
          </p>
          {coinData.coin_id}/{coinData.target_coin_id}
        </Grid.Column>
        <Grid.Column floated="right">
          <div style={priceContent}>
            <p style={coinHeader}>${coinData.last}</p>
            <span style={spread}>{coinData.bid_ask_spread_percentage}%</span>
          </div>
        </Grid.Column>
      </Grid>
    </Grid.Column>
  </Grid>
);

CoinInfo.propTypes = {
  coinData: PropTypes.object.isRequired,
};

export default CoinInfo;
