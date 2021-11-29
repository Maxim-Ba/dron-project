import { FunctionComponent } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { IDatacolumn } from "../types/dataColumn";
import HeaderRowOfTable from "./HeaderRowOfTable";

interface TableProps {

}


const Table: FunctionComponent<TableProps> = () => {
  const {tableData} = useTypedSelector(state=>state.viewOrder);

  return (
  <div >
    {tableData.map(client => <HeaderRowOfTable name={client.name} sum={client.sum} orders={client.orders}  key={client.name} />)}
  </div>


  );
};

export default Table;