import { Dispatch } from "redux";
import { PriceActions, priceActionsTypes, PriceType } from "../../types/priceTypes";

export const getPriceNames = (priceNames:Array<{ nameId:string,name:string }>) => {
  return async (dispatch: Dispatch<PriceActions>) => {
    
    dispatch({ type: priceActionsTypes.GET_PRICE_NAMES, payload: priceNames });
  };
};

export const selectPriceNames = (idName:number|null) => {
  return async (dispatch: Dispatch<PriceActions>) => {
    
    dispatch({ type: priceActionsTypes.SELECT_PRICE_NAME, payload: idName });
  };
};
export const setNameForCreation = (name:string) => {
  return async (dispatch: Dispatch<PriceActions>) => {
    
    dispatch({ type: priceActionsTypes.SET_NAME_FOR_CREATE, payload: name });
  };
};

export const readyForDeletePrice = (flag:boolean) => {
  return async (dispatch: Dispatch<PriceActions>) => {
    
    dispatch({ type: priceActionsTypes.READY_FOR_DELETE_PRICE, payload: flag });
  };
};

export const setPriceList = (priceList:PriceType[]) => {
  return async (dispatch: Dispatch<PriceActions>) => {
    
    dispatch({ type: priceActionsTypes.SET_PRICE_LIST, payload: priceList });
  };
};

export const fetchPriceList = (flag:boolean) => {
  return async (dispatch: Dispatch<PriceActions>) => {
    
    dispatch({ type: priceActionsTypes.FETCH_PRICE_LIST, payload: flag });
  };
};

export const arrayForChangePrice = (array:Array<{coast:number, id:number}> ) => {
  return async (dispatch: Dispatch<PriceActions>) => {
    
    dispatch({ type: priceActionsTypes.ARRAY_FOR_CHANGE, payload: array });
  };
};

export const readyForChangePrice = (flag:boolean) => {
  return async (dispatch: Dispatch<PriceActions>) => {
    
    dispatch({ type: priceActionsTypes.READY_FOR_CHANGE, payload: flag });
  };
};