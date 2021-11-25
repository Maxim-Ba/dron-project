import { Table } from 'antd';
import { FunctionComponent, useState } from 'react';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';



interface PriceTableProps {
  dataTable:Array<any>
}


const columns:any[] = [
  {
    title: 'Название',
    dataIndex: 'name',
    key: 'name',
    width: '90%',
    sorter: (a: { name: number; }, b: { name: number; }) => a.name > b.name,

  },

];
const PriceTable: FunctionComponent<PriceTableProps> = ({dataTable}) => {

  const {selectPriceNames} = useActions();
  const {selectedPrice} = useTypedSelector(state=>state.price);
  function onChange( filters: any, sorter: any) {
    console.log('params',  filters, sorter);
  }

  const dataTableAdapter = dataTable.map((price)=>({...price, key:price.nameId}));

  return ( 
    <Table 
      columns={columns} 
      dataSource={dataTableAdapter} 
      onChange={onChange} 
      pagination={false} 
      onRow={(record) => ({

        onClick: () => 
        
        selectPriceNames(record.key)
        

      })
    }
    rowSelection={{
      // onChange: 
      selectedRowKeys:[selectedPrice as number]
    }}
    onHeaderRow={(columns, index) => {
      return {
        onClick: () => selectPriceNames(null)
      };
    }}
      />
  );
};

export default PriceTable;