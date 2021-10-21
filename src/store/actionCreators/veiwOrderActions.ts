import { Dispatch } from "redux";
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