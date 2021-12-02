import { Table } from 'antd';
import { FunctionComponent } from 'react';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';



interface ClientTableProps {
  dataTable:Array<any>
}


const columns:any[] = [
  {
    title: 'Название',
    dataIndex: 'name',
    key: 'name',
    width: '30%',
    sorter: (a: { name: number; }, b: { name: number; }) => a.name > b.name,

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
      scroll={{ x: 100}}
      onRow={(record) => ({

        onClick: () => 
        
          selectClient(record.key)
        

      })
    }
    rowSelection={{
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