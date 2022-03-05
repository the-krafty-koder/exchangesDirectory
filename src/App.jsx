import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import {
  useRoutes,
  BrowserRouter,
} from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import ExchangesView from './features/ExchangesView';
import ExchangeProfile from './features/ExchangeProfile';
const sample = [];

const App = () => useRoutes([
    {
      path: '/',
      element: <ExchangesView exchangesData={sample}/>,
    },
    {
      path: '/page/:page',
      element: <ExchangesView exchangesData={sample}/>,
    },
    {
      path: '/profile/:profileId',
      element: <ExchangeProfile/>,
    },
  ]);

const AppWrapper = () => (
    <Container>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Container>
  );

export default App;
