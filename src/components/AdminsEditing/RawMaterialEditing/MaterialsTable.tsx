import { Table } from 'antd';
import { CompareFn } from 'antd/lib/table/interface';
import { FunctionComponent } from 'react';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';



interface MaterialsTableProps {
  dataTable:Array<any>
}


const columns : any[] = [
  {
    title: 'Название',
    dataIndex: 'name',
    key: 'name',
    defaultSortOrder: 'descend',
    sorter: (a: { name: number; }, b: { name: number; }) => a.name > b.name,

  },
  {
    title: 'Единицы измерения',
    dataIndex: 'units',
    key: 'units',
    width: '40%',
  },

];
const MaterialsTable: FunctionComponent<MaterialsTableProps> = ({dataTable}) => {

  const {selectMaterial} = useActions();
  const {materialSelected} = useTypedSelector(state=>state.rawMaterials);
  function onChange( filters: any, sorter: any) {
    console.log('params',  filters, sorter);
  }

  const dataTableAdapter = dataTable.map((material)=>({...material, key:material.id}));

  return ( 
    <Table 
      columns={columns} 
      dataSource={dataTableAdapter} 
      onChange={onChange} 
      pagination={false} 
      onRow={(record) => ({
        onClick: () => {
          selectMaterial(record.key);
        }

      })
    }
    rowSelection={{
      selectedRowKeys:[materialSelected as number]
    }}
    onHeaderRow={(columns, index) => {
      return {
        onClick: () => selectMaterial(null)
      };
    }}
      />
  );
};

export default MaterialsTable;