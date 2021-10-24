import React, { CSSProperties } from 'react';
import './custom-styles-for-antd/styles.css';

import { Route, Switch } from 'react-router';
import OrderManager from './components/OrderManager/OrderManager';
import OrderCreationCN from './components/contentNodes/OrderCreationCN';
import OrderViewCN from './components/contentNodes/OrderViewCN';
import AdminCN from './components/contentNodes/AdminCN';
import Options from './components/contentNodes/Options';
import { routesEnum } from './types/routes';
import Graph from './components/contentNodes/Graph';
import EditRawMaterials from './components/AdminsEditing/EditRawMaterials';
import EditPrice from './components/AdminsEditing/EditPrice';
import EditClients from './components/AdminsEditing/EditClients';
import { useTypedSelector } from './hooks/useTypedSelector';
import { generateCSSColor } from './utils/generateCSSColor';

const mainStyle: CSSProperties = {

  width: '100vw',
  overflowX:'hidden',
};

function App() {
  const {
    generalBackground,
    generalColor,
  } = useTypedSelector(state=>state.options);

  return (
    <main 
      style={{
        ...mainStyle, 
        backgroundColor: generateCSSColor(generalBackground), 
        color: generateCSSColor(generalColor)
        }}
    >
      <Switch>

        <Route path={routesEnum.ORDER_CREATION} exact>
          <OrderCreationCN />
        </Route>

        <Route path={routesEnum.ORDER_VIEW} exact>
          <OrderViewCN />
        </Route>

        <Route path={routesEnum.ADMIN} exact>
          <AdminCN />
        </Route>

        <Route path={routesEnum.ADMIN_RAW_MATERIALS} exact>
          <EditRawMaterials />
        </Route>

        <Route path={routesEnum.ADMIN_CLIENTS} exact>
          <EditClients />
        </Route>

        <Route path={routesEnum.ADMIN_PRICE} exact>
          <EditPrice />
        </Route>

        <Route path={routesEnum.OPTIONS} exact>
          <Options />
        </Route>

        <Route path={routesEnum.GRAPH} exact>
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

