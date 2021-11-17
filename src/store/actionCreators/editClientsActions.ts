import { Dispatch } from "redux";
import {
  clientActionsTypes,
  EditClientsActions,
} from "../../types/editClientsTypes";



export const getClients = (clients: any) => {
  return async (dispatch: Dispatch<EditClientsActions>) => {
    
    dispatch({ type: clientActionsTypes.GET, payload: clients });
  };
};

export const setClientNames = (name: string) => {
  return async (dispatch: Dispatch<EditClientsActions>) => {
    
    dispatch({ type: clientActionsTypes.SET_NAME_CLIENT, payload: name });
  };
};

export const setClientINN = (inn: number | null) => {
  return async (dispatch: Dispatch<EditClientsActions>) => {
    
    dispatch({ type: clientActionsTypes.SET_INN_CLIENT, payload: inn });
  };
};

export const setClientPhone = (phone: number | null) => {
  return async (dispatch: Dispatch<EditClientsActions>) => {
    
    dispatch({ type: clientActionsTypes.SET_PHONE_CLIENT, payload: phone });
  };
};

export const selectClient = (index: number| null) => {
  return async (dispatch: Dispatch<EditClientsActions>) => {
    
    dispatch({ type: clientActionsTypes.SELECT_CLIENT, payload: index });
  };
};


export const setClientNamesForChange = (name: string) => {
  return async (dispatch: Dispatch<EditClientsActions>) => {
    
    dispatch({ type: clientActionsTypes.SET_NAME_CLIENT_FOR_CHANGE, payload: name });
  };
};

export const setClientINNForChange = (inn: number | null) => {
  return async (dispatch: Dispatch<EditClientsActions>) => {
    
    dispatch({ type: clientActionsTypes.SET_INN_CLIENT_FOR_CHANGE, payload: inn });
  };
};

export const setClientPhoneForChange = (phone: number | null) => {
  return async (dispatch: Dispatch<EditClientsActions>) => {
    
    dispatch({ type: clientActionsTypes.SET_PHONE_CLIENT_FOR_CHANGE, payload: phone });
  };
};

export const readyForDeleteClient = (flag : boolean ) => {
  return async (dispatch: Dispatch<EditClientsActions>) => {
    
    dispatch({ type: clientActionsTypes.READY_FOR_DELETE, payload: flag });
  };
};