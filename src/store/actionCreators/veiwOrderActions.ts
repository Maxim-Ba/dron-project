import { Dispatch } from "redux";
import { IDatacolumn } from "../../types/dataColumn";
import { OrderViewActionTypes, OrderViewActions } from "../../types/orderViewTypes";

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