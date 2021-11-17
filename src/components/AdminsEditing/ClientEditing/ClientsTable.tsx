import { Table } from 'antd';
import { FunctionComponent, useState } from 'react';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';



interface ClientTableProps {
  dataTable:Array<any>
}


const columns = [
  {
    title: 'Название',
    dataIndex: 'name',
    key: 'name',
    width: '30%',
    sorter: true,// !!!!!!!!!!!!!!!!!

  },
  {
    title: 'ИНН',
    dataIndex: 'inn',
    key: 'inn',
    width: '20%',
  },
  {
    title: 'Телефон',
    dataIndex: 'phone',
    key: 'phone',

  }
];
const ClientTable: FunctionComponent<ClientTableProps> = ({dataTable}) => {

  const {selectClient} = useActions();
  const {isSelect} = useTypedSelector(state=>state.clients);
  function onChange( filters: any, sorter: any) {
    console.log('params',  filters, sorter);
  }

  const dataTableAdapter = dataTable.map((client, index)=>({...client, key:index}));

  return ( 
    <Table 
      columns={columns} 
      dataSource={dataTableAdapter} 
      onChange={onChange} 
      pagination={false} 
      onRow={(record) => ({

        onClick: () => 
        
          selectClient(record.key)
        

      })
    }
    rowSelection={{
      // onChange: 
      selectedRowKeys:[isSelect as number]
    }}
    onHeaderRow={(columns, index) => {
      return {
        onClick: () => selectClient(null)
      };
    }}
      />
  );
};

export default ClientTable;