import React, { CSSProperties } from 'react';
import './custom-styles-for-antd/styles.css';

import { grey } from '@ant-design/colors';
import { Route, Switch } from 'react-router';
import { Footer } from 'antd/lib/layout/layout';
import OrderManager from './components/OrderManager/OrderManager';
import OrderCreationCN from './components/contentNodes/OrderCreationCN';

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
        <Route path="/order-creation">
          <OrderCreationCN />
        </Route>
        <Route path="/order-view">
        <Footer />
        </Route>
        <Route path="/">
          <OrderManager />
        </Route>
      </Switch>
    </main>
  );
};

export default App;

