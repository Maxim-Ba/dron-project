import React, { CSSProperties } from 'react';
import './custom-styles-for-antd/styles.css';

import { grey } from '@ant-design/colors';
import { Route, Switch } from 'react-router';
import { Footer } from 'antd/lib/layout/layout';
import OrderManager from './components/OrderManager/OrderManager';
import OrderCreationCN from './components/contentNodes/OrderCreationCN';
import OrderViewCN from './components/contentNodes/OrderViewCN';
import AdminCN from './components/contentNodes/AdminCN';
import Options from './components/contentNodes/Options';
import { routesEnum } from './types/routes';
import Graph from './components/contentNodes/Graph';

const mainStyle: CSSProperties = {
  backgroundColor: grey[0],
  color: 'black',
  width: '100vw',
  overflowX:'hidden',
  
  

};
const divStyle: CSSProperties = {
  backgroundColor: grey[0],
  display: 'flex',
  flexDirection: 'column',
  minHeight: '190px',
  padding: 10,
  justifyContent: 'space-around'
};
function App() {
  return (
    <main style={mainStyle}>
      <Switch>

        <Route path={routesEnum.ORDER_CREATION}>
          <OrderCreationCN />
        </Route>

        <Route path={routesEnum.ORDER_VIEW}>
          <OrderViewCN />
        </Route>

        <Route path={routesEnum.ADMIN}>
          <AdminCN />
        </Route>

        <Route path={routesEnum.OPTIONS}>
          <Options />
        </Route>

        <Route path={routesEnum.GRAPH}>
          <Graph />
        </Route>

        <Route path={routesEnum.ORDER_MANAGER}>
          <OrderManager />
        </Route>
        
      </Switch>
    </main>
  );
};

export default App;

