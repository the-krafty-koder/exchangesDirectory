import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { useRoutes, BrowserRouter } from 'react-router-dom';
import { Container, Dropdown, Grid, Menu } from 'semantic-ui-react';
import ExchangesView from './features/ExchangesView';
import ExchangeProfile from './features/ExchangeProfile';

const App = () =>
  useRoutes([
    {
      path: '/',
      element: <ExchangesView />,
    },
    {
      path: '/page/:page',
      element: <ExchangesView />,
    },
    {
      path: '/profile/:exchangeId',
      element: <ExchangeProfile />,
    },
  ]);

const AppWrapper = () => (
    <div>
      <Menu size='large' >
        <Menu.Item inverted name='Exchanges Directory'/>
        <Menu.Item/>

        <Menu.Menu position='right'>
          <Dropdown item text='Language'>
            <Dropdown.Menu>
              <Dropdown.Item>English</Dropdown.Item>
              <Dropdown.Item>Italian</Dropdown.Item>
              <Dropdown.Item>Spanish</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Menu>
      <Grid.Row>
        <Container>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Container>
      </Grid.Row>
    </div>
);

export default AppWrapper;
