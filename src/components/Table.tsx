import { Alert } from "antd";
import { FunctionComponent, useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { TypesofMW } from "../types/ModalWindowTypes/ModalWindowTypes";
import ModlWindow from "./AdminsEditing/ModalWindow/ModalWindow";
import OrderTable from "./AdminsEditing/OrderEditing/OrderTable";
import HeaderRowOfTable from "./HeaderRowOfTable";

interface TableProps {

}


const Table: FunctionComponent<TableProps> = () => {
  const { tableData, selectedOrder } = useTypedSelector(state => state.viewOrder);


  const createTable = () => {
    let finalSum = 0;
    const hedersTableArray = tableData.map(client => {
      finalSum = finalSum + client.sum;
      return (
        <HeaderRowOfTable name={client.name} sum={client.sum} orders={client.orders} key={client.name} />
      );
    });

    return (
      <>
        {selectedOrder &&
          <ModlWindow
            children={
              <OrderTable
                data={selectedOrder?.materialList}
                date={selectedOrder.date}
                orderId={selectedOrder.orderId as number}
              />}
            title={"Редактирование заказа"}
            type={TypesofMW.ORDER_CHANGE}
          />
        }
        {hedersTableArray}
        <Alert message={`ИТОГ: ${finalSum} рублей`} type="info" />
      </>
    );
  };

  return (

    <div >
      {
        tableData.length
          ? createTable()
          : <Alert message="Нечего не найдено" type="info" />

      }
    </div>


  );
};

export default Table;