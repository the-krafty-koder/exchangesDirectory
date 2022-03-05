import React from 'react';
import PropTypes from 'prop-types';
import {
  useParams,
  Link
} from 'react-router-dom';
import ItemInfo from '../ItemInfo';
import { mainTable, header } from './index.css';

import { Button, Icon, Menu, Table } from 'semantic-ui-react';

const ExchangesTable = ({ exchangesData }) => {
  // pagination
  const { page } = useParams();
  const currentPage = parseInt(page);
  const displayPerPage = 10;
  const numPages = Math.ceil(exchangesData.length / displayPerPage);
  const start = (currentPage - 1) * displayPerPage;
  const end = currentPage * displayPerPage;
  const pageData = exchangesData.slice(start, end);

  return (
  <Table stackable striped style={mainTable}>
    <Table.Header style={header}>
      <Table.Row>
        <Table.HeaderCell>Basic Info</Table.HeaderCell>
        <Table.HeaderCell>URL</Table.HeaderCell>
        <Table.HeaderCell>Trust Rank</Table.HeaderCell>
        <Table.HeaderCell>Action</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
        {pageData.map((data) => (
            <Table.Row>
              <Table.Cell>
                <ItemInfo
                  name={`${data.name}`}
                  country={ `${data.country}` }
                  logoUrl= { `${data.image}` }
                />
              </Table.Cell>
              <Table.Cell>
                { `${data.url}` }
              </Table.Cell>
              <Table.Cell>{`${data.trust_score_rank}`}</Table.Cell>
              <Table.Cell>
                <Link to={ `/profile/${data.id}` }>
                  View
                </Link>
              </Table.Cell>
            </Table.Row>
          ))
        }
    </Table.Body>
    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='4'>
          <Menu floated='right' pagination>
            {
              currentPage === 1 ?
              <Menu.Item as='a' icon disabled>
                <Icon name='chevron left' />
              </Menu.Item>
              :
              <Menu.Item as='a' icon href={`/page/${currentPage - 1}`}>
                <Icon name='chevron left' />
              </Menu.Item>
            }

            {
              [...Array(numPages).keys()].map(key => (
                  <Menu.Item as='a' href={`/page/${key + 1}`}>
                    {key + 1}
                  </Menu.Item>
                )
              )
            }
            {
              currentPage === numPages ?
              <Menu.Item as='a' icon disabled>
                <Icon name='chevron right' />
              </Menu.Item>
              :
              <Menu.Item as='a' icon href={`/page/${currentPage + 1}`}>
                <Icon name='chevron right' />
              </Menu.Item>
            }
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
);
};

ExchangesTable.propTypes = {
  exchangesData: PropTypes.object.isRequired,
};

export default ExchangesTable;
