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
  export const setRawMaterialNameOC = (name:any,  index:any, id:any) =>{
    return async (dispatch:Dispatch<OrderCreationAction>)=>{
        dispatch({
          type:orderCreationTypes.SET_RAW_MATERIAL_NAME,
          payload:{
            name,
            index,
            id
          }
        });
    };
  };
  export const setRawMaterialAmountOC = (amount:any, index:any) =>{
    return async (dispatch:Dispatch<OrderCreationAction>)=>{
        dispatch({
          type:orderCreationTypes.SET_RAW_MATERIAL_AMOUNT,
          payload:{
            amount,
            index
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
  export const removeRawMaterialName = (index:number) =>{
    return async (dispatch:Dispatch<OrderCreationAction>)=>{
        dispatch({
          type:orderCreationTypes.REMOVE_RAW_MATERIAL_NAME,
          payload:{index}
        });
    };
  };
  export const removePriceOrderCreation = () =>{
    return async (dispatch:Dispatch<OrderCreationAction>)=>{
        dispatch({
          type:orderCreationTypes.REMOVE_PRICE,
        });
    };
  };

  export const setPriceOrderCreation = (id: any, name:any) =>{
    return async (dispatch:Dispatch<OrderCreationAction>)=>{
        dispatch({
          type:orderCreationTypes.SET_PRICE,
          payload: {
            id,
            name
          }
        });
    };
  };

  export const removeClientOrderCreation = () =>{
    return async (dispatch:Dispatch<OrderCreationAction>)=>{
        dispatch({
          type:orderCreationTypes.REMOVE_CLIENT,
        });
    };
  };

  
  export const setClientOrderCreation = (id: any, name:any) =>{
    return async (dispatch:Dispatch<OrderCreationAction>)=>{
        dispatch({
          type:orderCreationTypes.SET_CLIENT,
          payload: {
            id,
            name
          }
        });
    };
  };

  export const clearDateOrderCreation = () =>{
    return async (dispatch:Dispatch<OrderCreationAction>)=>{
        dispatch({
          type:orderCreationTypes.CLEAR_DATE,
        });
    };
  };

  export const setDateOrderCreation = (date:Date | string) =>{
    return async (dispatch:Dispatch<OrderCreationAction>)=>{
        dispatch({
          type:orderCreationTypes.SET_DATE,
          payload: date
        });
    };
  };

  export const toggleFetchOrderCreation = (flag:boolean) =>{
    return async (dispatch:Dispatch<OrderCreationAction>)=>{
        dispatch({
          type:orderCreationTypes.TOGGLE_FETCH,
          payload: flag
        });
    };
  };
  export const clearRawMaterialsListOrderCreation = () =>{
    return async (dispatch:Dispatch<OrderCreationAction>)=>{
        dispatch({
          type:orderCreationTypes.CLEAR_RAW_MATERIALS,
        });
    };
  };