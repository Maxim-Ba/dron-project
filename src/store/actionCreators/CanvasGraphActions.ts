import { CanvasActionTypes, CanvasPoint } from './../../types/CanvasGraphTypes';
import { Dispatch } from "redux";
import { CanvasGraphAction } from "../../types/CanvasGraphTypes";

export const getClientsCanvas = (clientsData: CanvasPoint[]) => {
  return async (dispatch: Dispatch<CanvasGraphAction>) => {
    dispatch({ type: CanvasActionTypes.GET_CLIENT, payload: clientsData });
  };
};

export const getAllCanvas = (allData: CanvasPoint[]) => {
  return async (dispatch: Dispatch<CanvasGraphAction>) => {
    dispatch({ type: CanvasActionTypes.GET_ALL, payload: allData });
  };
};
export const fetchCanvas = (flag: boolean) => {
  return async (dispatch: Dispatch<CanvasGraphAction>) => {
    dispatch({ type: CanvasActionTypes.FETCH, payload: flag });
  };
};

export const selectClientForCanvas = (clientId:number, name:string) => {
  return async (dispatch: Dispatch<CanvasGraphAction>) => {
    dispatch({ type: CanvasActionTypes.SELECT_CLIENT, payload: {clientId, name} });
  };
};