import { Dispatch } from "redux";
import { IDatacolumn } from "../../types/dataColumn";
import { OrderViewActionTypes, OrderViewActions, NewPriceItem } from "../../types/orderViewTypes";

export const setOnRightOrderViev = () =>{
    return async (dispatch:Dispatch<OrderViewActions>)=>{
        dispatch({type:OrderViewActionTypes.SET_ON_RIGHT});
    };
  };
  export const setOnLeftOrderViev = () =>{
    return async (dispatch:Dispatch<OrderViewActions>)=>{
        dispatch({type:OrderViewActionTypes.SET_ON_LEFT});
    };
  };
  export const setDisabledNextBtn = () =>{
    return async (dispatch:Dispatch<OrderViewActions>)=>{
        dispatch({type:OrderViewActionTypes.SET_DISABLED_NEXT});
    };
  };
  export const setUnaisabledNextBtn = () =>{
    return async (dispatch:Dispatch<OrderViewActions>)=>{
        dispatch({type:OrderViewActionTypes.SET_UNABLED_NEXT});
    };
  };
  export const selectClientVO = (client:null | {id:number, name:string}) =>{
    return async (dispatch:Dispatch<OrderViewActions>)=>{
        dispatch({
          type:OrderViewActionTypes.SELECT_CLIENT,
          payload:client
        });
    };
  };
  export const selectDateStatrVO = (date: null | Date) =>{
    return async (dispatch:Dispatch<OrderViewActions>)=>{
        dispatch({
          type:OrderViewActionTypes.SELECT_DATE_START,
          payload: date
        });
    };
  };
  export const selectDateEndVO = (date: null | Date) =>{
    return async (dispatch:Dispatch<OrderViewActions>)=>{
        dispatch({
          type:OrderViewActionTypes.SELECT_DATE_END,
          payload: date
        });
    };
  };
  export const setTableDataVO = (ordersData: IDatacolumn[] | []) =>{
    return async (dispatch:Dispatch<OrderViewActions>)=>{
        dispatch({
          type:OrderViewActionTypes.SET_TABLE_DATA,
          payload: ordersData
        });
    };
  };
  export const toggleFetchVO = (flag:boolean) =>{
    return async (dispatch:Dispatch<OrderViewActions>)=>{
        dispatch({
          type:OrderViewActionTypes.TOGGLE_FETCH,
          payload: flag
        });
    };
  };

  export const selectOrderForChange = (id:number) =>{
    return async (dispatch:Dispatch<OrderViewActions>)=>{
        dispatch({
          type:OrderViewActionTypes.SELECT_ORDER_FOR_CHANGE,
          payload: id
        });
    };
  };

  export const changeAmount = (id:number, amount: number) =>{
    return async (dispatch:Dispatch<OrderViewActions>)=>{
        dispatch({
          type:OrderViewActionTypes.CHANGE_AMOUNT,
          payload: {id, amount}
        });
    };
  };
  export const changeNewAmount = (index:number, amount: number) =>{
    return async (dispatch:Dispatch<OrderViewActions>)=>{
        dispatch({
          type:OrderViewActionTypes.CHANGE_NEW_AMOUNT,
          payload: {index, amount}
        });
    };
  };

  export const setToDeletePriceItem = (priceId:number ) =>{
    return async (dispatch:Dispatch<OrderViewActions>)=>{
        dispatch({
          type:OrderViewActionTypes.SET_TO_DELETE,
          payload: priceId
        });
    };
  };
  export const addNewPriceItem = (priceItem:NewPriceItem ) =>{
    return async (dispatch:Dispatch<OrderViewActions>)=>{
        dispatch({
          type:OrderViewActionTypes.ADD_NEW_PRICE_ITEM,
          payload: priceItem
        });
    };
  };
  export const selectNewItemVO = ( id:number | null, name:string, index:number ) =>{
    return async (dispatch:Dispatch<OrderViewActions>)=>{
        dispatch({
          type:OrderViewActionTypes.SELECT_RAW_MATERIAL,
          payload: {id,name,index}
        });
    };
  };
  export const resetNewItems = ( ) =>{
    return async (dispatch:Dispatch<OrderViewActions>)=>{
        dispatch({
          type:OrderViewActionTypes.RESET_NEW_PRICE_ITEM,
        });
    };
  };
  export const pushToEditItems = (id: number ) =>{
    return async (dispatch:Dispatch<OrderViewActions>)=>{
        dispatch({
          type:OrderViewActionTypes.PUSH_TO_EDIT_ARRAY_P_ITEM,
          payload:id
        });
    };
  };
  // export const popFromEditItems = (id: number ) =>{
  //   return async (dispatch:Dispatch<OrderViewActions>)=>{
  //       dispatch({
  //         type:OrderViewActionTypes.POP_FROM_EDIT_ARRAY_P_ITEM,
  //         payload:id
  //       });
  //   };
  // };