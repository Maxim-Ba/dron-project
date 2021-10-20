import { FunctionComponent } from "react";
import { IDatacolumn } from "../types/dataColumn";
import HeaderRowOfTable from "./HeaderRowOfTable";

interface TableProps {

}


const dateNow = new Date().toISOString().slice(0, 10);
const gettingPropsFromStore: IDatacolumn[] = [
  {
    name: 'one',
    sum: 1000,
    orders: [
      {
        date: dateNow,
        rawMaterial: 'govno',
        amount: 1134,
        price: 500.0
      },
      {
        date: dateNow,
        rawMaterial: 'govno',
        amount: 113,
        price: 500.0
      },
      {
        date: dateNow,
        rawMaterial: 'govno',
        amount: 113,
        price: 500.0
      },
    ]
  },
  {
    name: 'two',
    sum: 1000,
    orders: [
      {
        date: dateNow,
        rawMaterial: '345',
        amount: 113,
        price: 6000.0
      },
      {
        date: dateNow,
        rawMaterial: '34555345345345',
        amount: 113,
        price: 50000.0
      },
      {
        date: dateNow,
        rawMaterial: '3345345',
        amount: 113,
        price: 50000.0
      },
      {
        date: dateNow,
        rawMaterial: '555555',
        amount: 113,
        price: 500.0
      },
      {
        date: dateNow,
        rawMaterial: 'fffgovdfgdfgdfgdfnof',
        amount: 1135,
        price: 500500.0
      },
    ]
  },
];
const Table: FunctionComponent<TableProps> = () => {


  return (
  <div >
    {gettingPropsFromStore.map(client => <HeaderRowOfTable name={client.name} sum={client.sum} orders={client.orders}  key={client.name} />)}
  </div>


  );
};

export default Table;