import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Button, Card } from 'semantic-ui-react';
import { info, header } from './index.css';

const SocialCard = ({ name, url, icon, color }) => {
  return (
    <Card color='teal'>
      <Card.Content style={header} textAlign="center">
        <Card.Header >
          <Icon name={icon} size="big" color={color} />
        </Card.Header>
        <Card.Description style={info}>{name}</Card.Description>
      </Card.Content>

      <Card.Content textAlign="center" extra>

        <Button animated basic color="teal" as="a" href={url}>
          <Button.Content visible>Next</Button.Content>
          <Button.Content hidden>
            <Icon name="arrow right" />
          </Button.Content>
        </Button>
      </Card.Content>
    </Card>
  );
};

SocialCard.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
export default SocialCard;
