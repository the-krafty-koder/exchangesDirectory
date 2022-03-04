import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Image } from 'semantic-ui-react';

import { nameHeader } from './index.css';

const ItemInfo = ({ logoUrl, name, country }) => (
  <Grid>
    <Grid.Column width={2}>
      <Image src={logoUrl} size='mini' rounded />
    </Grid.Column>
    <Grid.Column width={8}>
      <Grid.Row style={nameHeader}>
        { name }
      </Grid.Row>
      <Grid.Row>
        { country }
      </Grid.Row>
    </Grid.Column>
  </Grid>
);

ItemInfo.propTypes = {
  logoUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};

export default ItemInfo;
