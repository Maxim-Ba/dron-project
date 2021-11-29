import { CSSProperties, FunctionComponent } from "react";
import { Collapse } from 'antd';
import ClientView from "./ClientView";
import { IOrder } from "../types/dataColumn";
import CustomTableItem from "./CustomTableItem";
import '../custom-styles-for-antd/styles.css';
import OrderViewPanel from "./OrderViewPanel";
interface HeaderRowOfTableProps {
  name: string,
  sum: number,
  orders: IOrder[]
}
const { Panel } = Collapse;
const width: CSSProperties = {
  width: '100vw'
};

const HeaderRowOfTable: FunctionComponent<HeaderRowOfTableProps> = ({ name, sum, orders }: HeaderRowOfTableProps) => {
  return (
    <Collapse accordion expandIconPosition='right' style={width}>

      <Panel header={<ClientView name={name} sum={sum} />} key="1" >
        {orders.map(order => {
          return (
            <Collapse accordion expandIconPosition='right' style={width} key={order.orderId}>
              <Panel header={<OrderViewPanel sum={order.price} date={order.date} id={order.orderId} />} key="1" >
                <CustomTableItem showHeader={true} materialList={order.materialList} />

              </Panel>
            </Collapse>

          );
        })}
      </Panel>
    </Collapse>
  );
};

export default HeaderRowOfTable;