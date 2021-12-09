import React, { CSSProperties, useEffect } from 'react';
import './custom-styles-for-antd/styles.css';

import { Route, Switch } from 'react-router';
import OrderManager from './components/OrderManager/OrderManager';
import OrderCreationCN from './components/contentNodes/OrderCreationCN';
import OrderViewCN from './components/contentNodes/OrderViewCN';
import AdminCN from './components/contentNodes/AdminCN';
import Options from './components/contentNodes/Options';
import { routesEnum } from './types/routes';
import Graph from './components/contentNodes/Graph';
import EditRawMaterials from './components/AdminsEditing/RawMaterialEditing/EditRawMaterials';
import EditPrice from './components/AdminsEditing/PriceEditing/EditPrice';
import EditClients from './components/AdminsEditing/ClientEditing/EditClients';
import { useTypedSelector } from './hooks/useTypedSelector';
import { generateCSSColor } from './utils/generateCSSColor';
import usersAPI from './backendAPI/usersAPI';
import RegistrationCN from './components/contentNodes/RegistrationCN';
import LoginCN from './components/contentNodes/LoginCN';
import { useActions } from './hooks/useActions';

const mainStyle: CSSProperties = {
  maxWidth: '100vw',
  overflowX: 'hidden',
};
console.log(process.env.REACT_APP_ENVIRONMENT, 'process.env.REACT_APP_ENVIRONMENT');
function App() {
  const {
    generalBackground,
    generalColor,
  } = useTypedSelector(state => state.options);

  const {setUser, setIsFetching, setAllStyleFromLocStor} = useActions();
  const handleAuth = async() =>{
    try {
      setIsFetching(true);
      const data  = await usersAPI.auth();
      setUser(data?.id, data?.email, data?.role);
    } catch (error) {
      console.log(error);
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(
    () => {
      if (localStorage.getItem('options')) {
        const options = JSON.parse(localStorage.getItem('options') as string);
        setAllStyleFromLocStor(options);
      }
      handleAuth();
    },
    []
  );

  
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

        <Route path={routesEnum.LOGIN} exact>
          <LoginCN />
        </Route>

        <Route path={routesEnum.REGISTRATION} exact>
          <RegistrationCN />
        </Route>

        <Route path={routesEnum.ORDER_MANAGER}>
          <OrderManager />
        </Route>


      </Switch>
    </main>
  );
};

export default App;

