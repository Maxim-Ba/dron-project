export interface IClientState {
  isFetching : boolean;
  error: null | string 
  clients: []
};

export enum ClientActionTypes {
  FETCH_CLIENTS = "FETCH_CLIENTS",
  SET_ERROR = "SET_ERROR",
  SET_CLIENTS = "SET_CLIENTS"
}

interface IFetchClientAction {
  type: ClientActionTypes.FETCH_CLIENTS,
  payload: boolean
}
interface ISetClientAction {
  type: ClientActionTypes.SET_CLIENTS,
  payload: []
}
interface ISetErrorAction {
  type: ClientActionTypes.SET_ERROR,
  payload: string | null
}









export type ClientAction = 
  IFetchClientAction
  | ISetClientAction
  | ISetErrorAction