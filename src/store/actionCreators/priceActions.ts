import { Dispatch } from "redux";
import { PriceActions, priceActionsTypes } from "../../types/priceTypes";

export const getPriceNames = (priceNames:Array<{ nameId:string,name:string }>) => {
  return async (dispatch: Dispatch<PriceActions>) => {
    
    dispatch({ type: priceActionsTypes.GET_PRICE_NAMES, payload: priceNames });
  };
};