import { FunctionComponent, useState } from "react";
import { Table, Form,  Switch} from 'antd';
import { IOrder } from "../types/dataColumn";
import { ColumnsType } from 'antd/es/table';

interface CustomTableItemProps {
  showHeader:boolean
  orders: IOrder[]
}

const addKG = (amount:number):string =>{
  return amount.toString() + ' кг';
};
const addRub = (amount:number):string =>{
  return amount.toString() + ' руб.';
};

interface INewOrder  {
  date:string | DateConstructor,
  rawMaterial:string,
  amount:string ,
  price:string 
}
const columns:ColumnsType<INewOrder> = [
  {
    title: 'Дата',
    dataIndex: 'date',
    key: 'date',
    width: 110,
    fixed: 'left',

  },
  {
    title: 'Сырье',
    dataIndex: 'rawMaterial',
    key: 'rawMaterial',
  },
  {
    title: 'Кол-во',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: 'Цена',
    dataIndex: 'price',
    key: 'price',
    width: 100,

  },
];

const formateOrders = (orders:IOrder[]):INewOrder[]=>{
  return orders.map((order)=>({...order,
      amount: addKG(order.amount),
      price: addRub(500.0)
  }));
};

const CustomTableItem: FunctionComponent<CustomTableItemProps> = ({showHeader, orders}:CustomTableItemProps) => {
  

  return ( 
    <section style={{backgroundColor:"white"}}>

      <Table
        dataSource={formateOrders(orders)} 
        columns={columns} 
        bordered={true} 
        showHeader={showHeader} 
        pagination={false}
        scroll={{x:400}}
        tableLayout='fixed'
      />
    </section>
  );
};

export default CustomTableItem;