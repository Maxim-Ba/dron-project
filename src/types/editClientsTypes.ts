export type ClientType = {
  name: string;
  phone: number | string | null;
  id: number;
  inn: number | null;
};
export interface IClientsState {
  clientList: Array<ClientType>;
  formFields: {
    name: string;
    inn: null | number;
    phone: null | number;
  };
  isSelect:null | number,
  selectedClientsFields:ClientType,
  readyForDelete:boolean,
  isFetching:boolean

}

export enum clientActionsTypes {
  GET = "GET",
  CREATE = "CREATE",
  CHANGE = "CHANGE",
  DELETE = "DELETE",
  SET_NAME_CLIENT = "SET_NAME_CLIENT",
  SET_INN_CLIENT = "SET_INN_CLIENT",
  SET_PHONE_CLIENT = "SET_PHONE_CLIENT",
  SELECT_CLIENT="SELECT_CLIENT",
  SET_NAME_CLIENT_FOR_CHANGE = "SET_NAME_CLIENT_FOR_CHANGE",
  SET_INN_CLIENT_FOR_CHANGE = "SET_INN_CLIENT_FOR_CHANGE",
  SET_PHONE_CLIENT_FOR_CHANGE = "SET_PHONE_CLIENT_FOR_CHANGE",
  READY_FOR_DELETE = "READY_FOR_DELETE",
  TOGGLE_FETCH = "TOGGLE_FETCH",

}
interface toggleFetchAction {
  type: clientActionsTypes.TOGGLE_FETCH,
  payload:boolean
}
interface getClientssAction {
  type: clientActionsTypes.GET;
  payload: Array<ClientType>;
}
interface setClientNamesAction {
  type: clientActionsTypes.SET_NAME_CLIENT;
  payload: string;
}
interface setClientINNAction {
  type: clientActionsTypes.SET_INN_CLIENT;
  payload: number | null;
}
interface setClientPhonesAction {
  type: clientActionsTypes.SET_PHONE_CLIENT;
  payload: number | null;
}

interface setClientNamesForChangeAction {
  type: clientActionsTypes.SET_NAME_CLIENT_FOR_CHANGE;
  payload: string;
}
interface setClientINNForChangeAction {
  type: clientActionsTypes.SET_INN_CLIENT_FOR_CHANGE;
  payload: number | null;
}
interface setClientPhonesForChangeAction {
  type: clientActionsTypes.SET_PHONE_CLIENT_FOR_CHANGE;
  payload: number | null;
}
interface ReadyForDeleteClient {
  type: clientActionsTypes.READY_FOR_DELETE;
  payload: boolean;
}
interface selectClientAction {
  type: clientActionsTypes.SELECT_CLIENT;
  payload: number | null;
}
interface createClientAction {
  type: clientActionsTypes.CREATE;
  payload: ClientType;
}

interface changeClientAction {
  type: clientActionsTypes.CHANGE;
  payload: ClientType;
}
interface deleteClientAction {
  type: clientActionsTypes.DELETE;
  payload: { id: number };
}
export type EditClientsActions =
  | getClientssAction
  | createClientAction
  | changeClientAction
  | deleteClientAction
  | setClientINNAction
  | setClientNamesAction
  | setClientPhonesAction
  | selectClientAction
  | setClientNamesForChangeAction
  | setClientINNForChangeAction
  | setClientPhonesForChangeAction
  | ReadyForDeleteClient
  | toggleFetchAction