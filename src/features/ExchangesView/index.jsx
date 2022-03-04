import React from 'react';
import { Grid, Icon, Header } from 'semantic-ui-react';
import ExchangesTable from '../../components/ExchangesTable';
import { content } from './index.css';

const ExchangesView = ({ exchangesData, page }) => (
    <Grid style={content}>
      <Grid.Row>
        <Header as='h3'>Exchanges Directory</Header>
        <Icon name='viacoin'/>
        <Icon name='bitcoin'/>
      </Grid.Row>
      <Grid.Row>
        <ExchangesTable exchangesData={ exchangesData }>
        </ExchangesTable>
      </Grid.Row>
    </Grid>
  );

export default ExchangesView;
