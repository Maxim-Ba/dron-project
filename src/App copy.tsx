import React, { CSSProperties } from 'react';
import './App.css';
import { grey } from '@ant-design/colors';
import GeneralContainer from './components/GeneralContainer';
import { customButtonsStyleType } from './types/buttonTypes';
import Table from './components/Table';
import CustomButton from './components/CustomButton';
import { Route, Switch } from 'react-router';
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
          <GeneralContainer
            headerTitleButton={customButtonsStyleType.orderCreation}
            contentNode={<OrderCreationCN />}
            footerButtonsArray={[customButtonsStyleType.back, customButtonsStyleType.next]}
          />
        </Route>
        <Route path="/order-view">
          <GeneralContainer
            headerTitleButton={customButtonsStyleType.listOrder}
            contentNode={
              <div style={divStyle}>
                <CustomButton styleType={{ styleType: customButtonsStyleType.createOrder }} />
                <CustomButton styleType={{ styleType: customButtonsStyleType.viewOrder }} />
              </div>
            }
            footerButtonsArray={[customButtonsStyleType.cancel, customButtonsStyleType.show]}
          />
        </Route>
        <Route path="/">
          <GeneralContainer
            headerTitleButton={customButtonsStyleType.orderManager}
            contentNode={
              <div style={divStyle}>
                <CustomButton styleType={{ styleType: customButtonsStyleType.createOrder }} />
                <CustomButton styleType={{ styleType: customButtonsStyleType.viewOrder }} />
              </div>
            }
            footerButtonsArray={[]}
          />
        </Route>

      </Switch>


    </main>
  );
};

export default App;

