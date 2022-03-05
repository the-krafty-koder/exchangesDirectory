import React from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Icon, Segment, Label, Header, Button } from 'semantic-ui-react';
import { sample } from './data.js';
import CoinInfo from '../../components/CoinInfo';
import SocialCard from '../../components/SocialCard';
import { content, segment, card, infoContent, socialCardContent } from './index.css';

const ExchangeProfile = () => {
  const params = useParams();
  const trunc = (num) => Math.round(num);

  return (
    <Grid container style={content} stackable >
      <Grid.Row>
        <Grid.Column>
          <Label image size="big">
            <img alt='logo' src={`${sample.image}`} />
            {sample.name}
          </Label>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Segment style={segment}>
            <Grid stackable celled='internally'>
              <Grid.Row >
                <Grid.Column width={5} >
                  <Header as='h4'>
                    Trade Volume
                  </Header>
                  <Header as='h2'>
                    { trunc(sample.trade_volume_24h_btc) }
                  </Header>
                  <span>Traded volume in BTC for the last 24 hours</span>
                </Grid.Column>
                <Grid.Column width={5}>
                  <Header as='h4'>
                    Trust Score
                  </Header>
                  <Header as='h2'>
                    { sample.trust_score }
                  </Header>
                  <span>Measurement of satisfaction</span>
                </Grid.Column>
                <Grid.Column width={5}>
                  <Header as='h4'>
                    Trust Score Rank
                  </Header>
                  <Header as='h2'>
                    { sample.trust_score_rank }
                  </Header>
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
                        <Icon name='calendar alternate' size='big' color='teal'/>
                      </Grid.Column>
                      <Grid.Column width={11}>
                        <p style={infoContent}>Year established</p>
                        { sample.year_established }
                      </Grid.Column>
                  </Grid>
                </Segment>
              </Grid.Column>
              <Grid.Column width={7} floated='right'>
              <Segment style={card}>
                <Grid>
                    <Grid.Column width={5}>
                      <Icon name='location arrow' size='big' color='teal'/>
                    </Grid.Column>
                    <Grid.Column width={11}>
                      <p style={infoContent}>Country</p>
                      { sample.country }
                    </Grid.Column>
                </Grid>
              </Segment>
              </Grid.Column>
          </Grid>
          <Grid columns={3} style={socialCardContent}>
              <Grid.Column>
                <SocialCard
                  name='Reddit'
                  icon='reddit'
                  url={ sample.reddit_url }
                  color='red'
                />
              </Grid.Column>
              <Grid.Column>
                <SocialCard
                  name='Facebook'
                  icon='facebook'
                  url={ sample.facebook_url }
                  color='blue'
                />
              </Grid.Column>
              <Grid.Column>
                <SocialCard
                  name='Website'
                  icon='linkify'
                  url={ sample.url }
                  color='grey'
                />
              </Grid.Column>
          </Grid>
          <Button
            only='computer'
            animated
            style={socialCardContent}
            basic
            color='black'
            as='a'
            href='/'
          >
            <Button.Content visible>Back</Button.Content>
            <Button.Content hidden>
              <Icon name='arrow left' />
            </Button.Content>
          </Button>
        </Grid.Column>

        <Grid.Column width={8}>
          <Segment>
            {
              sample.tickers.map((coin) => {
                return (
                  <CoinInfo coinData={coin} />
                );;
              })
            }
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default ExchangeProfile;
