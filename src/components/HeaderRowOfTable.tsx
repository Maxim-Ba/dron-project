import { CSSProperties, FunctionComponent } from "react";
import { Collapse } from 'antd';
import ClientView from "./ClientView";
import { IOrder } from "../types/dataColumn";
import CustomTableItem from "./CustomTableItem";
import '../custom-styles-for-antd/styles.css';
interface HeaderRowOfTableProps {
  name:string,
  sum: number,
  orders: IOrder[]
}
const { Panel } = Collapse;
const width:CSSProperties ={
  width:'100vw'
};

const HeaderRowOfTable: FunctionComponent<HeaderRowOfTableProps> = ({name, sum, orders}:HeaderRowOfTableProps) => {
  return (
    <Collapse accordion expandIconPosition='right' style={width}>
      
      <Panel header={<ClientView name={name} sum={sum} />} key="1" >
        <CustomTableItem  showHeader={false} orders={orders} />
      </Panel>
    </Collapse>
  );
}; 

export default HeaderRowOfTable;