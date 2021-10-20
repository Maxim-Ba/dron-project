import { FunctionComponent, useState } from "react";
import { Table, Form, Switch } from 'antd';
import { IDatacolumn } from "../types/dataColumn";
import CustomTableItem from "./CustomTableItem";

interface CustomTableProps {

}

const CustomTable: FunctionComponent<CustomTableProps> = () => {

  const [showHeader, setShowHeader] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [hideAll, setHideAll] = useState(false);
  const handleHeaderChange = (callBack: any, value: boolean) => {
    callBack(!value);
  };
  const dateNow = new Date().toISOString().slice(0,10);
  const gettingPropsFromStore: IDatacolumn[] = [
    {
      name: 'one',
      sum: 1000,
      orders: [
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
          amount: 113,
          price: 50000.0
        },
      ]
    },
  ];

  return (
    <section>
      <div style={{ backgroundColor: "white" }}>
        <Form.Item label="Шапка таблицы">
          <Switch checked={showHeader} onChange={() => handleHeaderChange(setShowHeader, showHeader)} />
        </Form.Item>
        <Form.Item label="Раскрыть">
          <Switch checked={showAll} onChange={() => handleHeaderChange(setShowAll, showAll)} />
        </Form.Item>
        <Form.Item label="Скрыть">
          <Switch checked={hideAll} onChange={() => handleHeaderChange(setHideAll, hideAll)} />
        </Form.Item>
      </div>
      {/* {gettingPropsFromStore.map(client=><CustomTableItem key={client.name} showHeader={showHeader} dataColumn={client} />)} */}
    </section>
  );
};

export default CustomTable;