import { Alert } from "antd";
import { FunctionComponent } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import HeaderRowOfTable from "./HeaderRowOfTable";

interface TableProps {

}


const Table: FunctionComponent<TableProps> = () => {
  const {tableData} = useTypedSelector(state=>state.viewOrder);
  return (

  <div >
    {
      tableData.length 
      ? tableData.map(client => <HeaderRowOfTable name={client.name} sum={client.sum} orders={client.orders}  key={client.name} />)
      : <Alert message="Нечего не найдено" type="info" />

    }
  </div>


  );
};

export default Table;