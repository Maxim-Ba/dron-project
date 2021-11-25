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
        orderId:1,
        date: dateNow,
        materialList:[
          {
            rawMaterial: 'govno',
            amount: 1134,
            price:234,
            priceByOne:3,
            units:'кг'
          },
          {
            rawMaterial: 'go2323232323v 232ggggvno',
            amount: 1134,
            price:234,
            priceByOne:3,
            units:'кг'
          },
          {
            rawMaterial: 'govno',
            amount: 1134,
            price:234,
            priceByOne:3,
            units:'кг'
          },
          {
            rawMaterial: 'gov23232323232323no',
            amount: 1134,
            price:234,
            priceByOne:3,
            units:'кг'
          },
          {
            rawMaterial: 'govno',
            amount: 1134,
            price:234,
            priceByOne:3,
            units:'кг'
          },
        ],

        price: 500.0
      },
      {
        orderId:2,
        date: dateNow,
        materialList:[
          {
            rawMaterial: 'govno',
            amount: 1134,
            price:234,
            priceByOne:3,
            units:'кг'
          }
        ],
        price: 500.0
      },
      {
        orderId:3,
        date: dateNow,
        materialList:[
          {
            rawMaterial: 'govno',
            amount: 1134,
            price:234,
            priceByOne:3,
            units:'кг'
          }
        ],
        price: 500.0
      },
    ]
  },
  {
    name: 'two',
    sum: 1000,
    orders: [
      {
        orderId:4,
        date: dateNow,
        materialList:[
          {
            rawMaterial: 'govno',
            amount: 1134,
            price:234,
            priceByOne:3,
            units:'кг'
          }
        ],
        price: 6000.0
      },
      {
        orderId:5,
        date: dateNow,
        materialList:[
          {
            rawMaterial: 'govno',
            amount: 1134,
            price:234,
            priceByOne:3,
            units:'кг'
          }
        ],
        price: 50000.0
      },
      {
        orderId:6,
        date: dateNow,
        materialList:[
          {
            rawMaterial: 'govno',
            amount: 1134,
            price:234,
            priceByOne:3,
            units:'кг'
          }
        ],
        price: 50000.0
      },
      {
        orderId:7,
        date: dateNow,
        materialList:[
          {
            rawMaterial: 'govno',
            amount: 1134,
            price:234,
            priceByOne:3,
            units:'кг'
          }
        ],
        price: 500.0
      },
      {
        orderId:8,
        date: dateNow,
        materialList:[
          {
            rawMaterial: 'govno',
            amount: 1134,
            price:234,
            priceByOne:3,
            units:'кг'
          }
        ],
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