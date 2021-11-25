import { FunctionComponent } from "react";
import { Table } from 'antd';
import { IMaterialList } from "../types/dataColumn";
import { ColumnsType } from 'antd/es/table';

interface CustomTableItemProps {
  showHeader: boolean
  materialList: IMaterialList[]
}

const addKG = (amount: number, units: string): string => {
  return amount.toString() + units;
};
const addRub = (amount: number): string => {
  return amount.toString() + ' руб.';
};

interface INewMaterialList {
  rawMaterial: string,
  amount: string,
  price: string,
  priceByOne: number,

}
const columns: ColumnsType<INewMaterialList> = [
  {
    title: 'Сырье',
    dataIndex: 'rawMaterial',
    key: 'rawMaterial',
    width: 110,
    fixed: 'left',
  },
  {
    title: 'Кол-во',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: 'Цена за ед.',
    dataIndex: 'priceByOne',
    key: 'priceByOne',
    width: 100,

  },
  {
    title: 'Цена',
    dataIndex: 'price',
    key: 'price',
    width: 100,

  },

];

const formateList = (materialList: IMaterialList[]): INewMaterialList[] => {
  return materialList.map((item) => ({
    ...item,
    amount: addKG(item.amount, item.units),
    price: addRub(item.price)
  }));
};

const CustomTableItem: FunctionComponent<CustomTableItemProps> = ({ showHeader, materialList }: CustomTableItemProps) => {


  return (
    <section style={{ backgroundColor: "white" }}>

      <Table
        dataSource={formateList(materialList)}
        columns={columns}
        bordered={true}
        showHeader={showHeader}
        pagination={false}
        scroll={{ x: 400 }}
        tableLayout='fixed'
      />
    </section>
  );
};

export default CustomTableItem;