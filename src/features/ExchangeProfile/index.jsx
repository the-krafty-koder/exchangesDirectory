import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { Grid, Icon, Segment, Label, Header, Button } from 'semantic-ui-react';

import { useFetchExchangeData } from '../../hooks/useFetchRequiredData';
import { selectExchange } from '../../features/fetchers/fetchExchangeSlice';
import CoinInfo from '../../components/CoinInfo';
import SocialCard from '../../components/SocialCard';
import {
  content,
  segment,
  card,
  infoContent,
  socialCardContent,
} from './index.css';

const ExchangeProfile = () => {
  const { exchangeId } = useParams();
  const trunc = (num) => Math.round(num);
  const navigate = useNavigate();

  useFetchExchangeData({ exchangeId });
  const exchangeData = useSelector(selectExchange);

  return (
    <Grid container style={content} stackable>
      <Grid.Row>
        <Grid.Column>
          <Label image size="big">
            <img alt="logo" src={`${exchangeData.image}`} />
            {exchangeData.name}
          </Label>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Segment style={segment}>
            <Grid stackable celled="internally" positive>
              <Grid.Row>
                <Grid.Column width={5}>
                  <Header as="h4">Trade Volume</Header>
                  <Header as="h2">
                    {trunc(exchangeData.trade_volume_24h_btc)}
                  </Header>
                  <span>Traded volume in BTC for the last 24 hours</span>
                </Grid.Column>
                <Grid.Column width={5}>
                  <Header as="h4">Trust Score</Header>
                  <Header as="h2">{exchangeData.trust_score}</Header>
                  <span>Measurement of satisfaction</span>
                </Grid.Column>
                <Grid.Column width={5}>
                  <Header as="h4">Trust Score Rank</Header>
                  <Header as="h2">{exchangeData.trust_score_rank}</Header>
                  <span>Rank in measurement of satisfaction</span>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column stackable width={8}>
          <h3>Exchange Info</h3>
          <Grid stackable>
            <Grid.Column width={7}>
              <Segment style={card}>
                <Grid>
                  <Grid.Column width={5}>
                    <Icon name="calendar alternate" size="big" color="teal" />
                  </Grid.Column>
                  <Grid.Column width={11}>
                    <p style={infoContent}>Year established</p>
                    {exchangeData.year_established}
                  </Grid.Column>
                </Grid>
              </Segment>
            </Grid.Column>
            <Grid.Column width={7} floated="right">
              <Segment style={card}>
                <Grid>
                  <Grid.Column width={5}>
                    <Icon name="location arrow" size="big" color="teal" />
                  </Grid.Column>
                  <Grid.Column width={11}>
                    <p style={infoContent}>Country</p>
                    {exchangeData.country}
                  </Grid.Column>
                </Grid>
              </Segment>
            </Grid.Column>
          </Grid>
          <Grid columns={3} style={socialCardContent}>
            <Grid.Column>
              <SocialCard
                name="Reddit"
                icon="reddit"
                url={exchangeData.reddit_url}
                color="red"
              />
            </Grid.Column>
            <Grid.Column>
              <SocialCard
                name="Facebook"
                icon="facebook"
                url={exchangeData.facebook_url}
                color="blue"
              />
            </Grid.Column>
            <Grid.Column>
              <SocialCard
                name="Website"
                icon="linkify"
                url={exchangeData.url}
                color="grey"
              />
            </Grid.Column>
          </Grid>
          <Button
            animated
            style={socialCardContent}
            basic
            color="black"
            onClick={() => navigate(-1)}
          >
            <Button.Content visible>Back</Button.Content>
            <Button.Content hidden>
              <Icon name="arrow left" />
            </Button.Content>
          </Button>
        </Grid.Column>

        <Grid.Column width={8}>
          <Segment>
            {exchangeData.tickers.slice(0, 7).map((coin) => {
              return <CoinInfo coinData={coin} key={coin.base}  />;
            })}
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default ExchangeProfile;
