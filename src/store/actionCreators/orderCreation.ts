import { Dispatch } from 'redux';
import { OrderCreationAction, orderCreationTypes } from '../../types/orderCreationTypes';




export const setOnRight = () =>{
  return async (dispatch:Dispatch<OrderCreationAction>)=>{
      dispatch({type:orderCreationTypes.SET_IS_RIGHT});
  };
};
export const setOnLeft = () =>{
  return async (dispatch:Dispatch<OrderCreationAction>)=>{
      dispatch({type:orderCreationTypes.SET_IS_LEFT});
  };
};
  export const setIsButtomDisabled = () =>{
    return async (dispatch:Dispatch<OrderCreationAction>)=>{
        dispatch({type:orderCreationTypes.SET_BUTTON_DISABLED});
    };
  };
  export const setIsButtomUndisabled = () =>{
    return async (dispatch:Dispatch<OrderCreationAction>)=>{
        dispatch({type:orderCreationTypes.SET_BUTTON_UNDISABLED});
    };
  };
  export const renderCreateBtn = () =>{
    return async (dispatch:Dispatch<OrderCreationAction>)=>{
        dispatch({type:orderCreationTypes.RENDER_CREATE_BUTTON});
    };
  };