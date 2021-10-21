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
  export const addRawMaterial = () =>{
    return async (dispatch:Dispatch<OrderCreationAction>)=>{
        dispatch({
          type:orderCreationTypes.ADD_RAW_MATERIAL
        });
    };
  };
  export const setRawMaterial = (name:string, amount:number) =>{
    return async (dispatch:Dispatch<OrderCreationAction>)=>{
        dispatch({
          type:orderCreationTypes.ADD_RAW_MATERIAL,
          payload:{
            name,
            amount
          }
        });
    };
  };
  export const removeRawMaterial = (index:number) =>{
    return async (dispatch:Dispatch<OrderCreationAction>)=>{
        dispatch({
          type:orderCreationTypes.REMOVE_RAW_MATERIAL,
          payload:{index}
        });
    };
  };