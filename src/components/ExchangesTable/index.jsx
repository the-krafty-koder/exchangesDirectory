import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button, Icon, Menu, Table } from 'semantic-ui-react';

import { useFetchExchangesData } from '../../hooks/useFetchRequiredData';
import { selectExchanges } from '../../features/fetchers/fetchersSlice';
import ItemInfo from '../ItemInfo';
import { mainTable } from './index.css';

const ExchangesTable = () => {
  // pagination
  useFetchExchangesData();
  const exchangesData = useSelector(selectExchanges);

  const { page = 1 } = useParams();
  const currentPage = parseInt(page);
  const displayPerPage = 10;
  const numPages = Math.ceil(exchangesData.length / displayPerPage);
  const start = (currentPage - 1) * displayPerPage;
  const end = currentPage * displayPerPage;

  return (
    <Table color='teal' key='teal' stackable striped style={mainTable}>
      <Table.Header>
        <Table.Row positive>
          <Table.HeaderCell>Basic Info</Table.HeaderCell>
          <Table.HeaderCell>URL</Table.HeaderCell>
          <Table.HeaderCell>Trust Rank</Table.HeaderCell>
          <Table.HeaderCell>Action</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {exchangesData.slice(start, end).map((data) => (
          <Table.Row key={data.name}>
            <Table.Cell>
              <ItemInfo
                name={`${data.name}`}
                country={`${data.country}`}
                logoUrl={`${data.image}`}
              />
            </Table.Cell>
            <Table.Cell>
              <a href={`${data.url}`}>{`${data.url}`}</a>
            </Table.Cell>
            <Table.Cell>{`${data.trust_score_rank}`}</Table.Cell>
            <Table.Cell>
              <Button basic color="teal">
                <Link to={`/profile/${data.id}`}>View</Link>
              </Button>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
      <Table.Footer>
        <Table.Row>
          <Table.HeaderCell colSpan="4">
            <Menu floated="right" pagination>
              {currentPage === 1 ? (
                <Menu.Item color='teal' as="a" icon disabled>
                  <Icon color='teal' name="chevron left" />
                </Menu.Item>
              ) : (
                <Menu.Item as="a" icon href={`/page/${currentPage - 1}`}>
                  <Icon color='teal' name="chevron left" />
                </Menu.Item>
              )}

              {[...Array(numPages).keys()].map((key) => (
                <Menu.Item key={key} as="a" href={`/page/${key + 1}`}>
                  {key + 1}
                </Menu.Item>
              ))}
              {currentPage === numPages ? (
                <Menu.Item as="a" icon disabled>
                  <Icon color='teal' name="chevron right" />
                </Menu.Item>
              ) : (
                <Menu.Item as="a" icon href={`/page/${currentPage + 1}`}>
                  <Icon color='teal' name="chevron right" />
                </Menu.Item>
              )}
            </Menu>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  );
};

export default ExchangesTable;
