
export type CanvasPoint = number[]

export interface CanvasGraphState{
  allData: CanvasPoint[] | []
  client: CanvasPoint[] | []
  fetch: boolean,
  selectedClient: {clientId:number, name: string}

};

export enum CanvasActionTypes{
  GET_CLIENT="GET_CLIENT",
  GET_ALL="GET_ALL",
  FETCH="FETCH",
  SELECT_CLIENT="SELECT_CLIENT"
}

export interface GetClientDataAction{
  type:CanvasActionTypes.GET_CLIENT,
  payload: CanvasPoint[] 
}

export interface GetAllDataAction{
  type:CanvasActionTypes.GET_ALL,
  payload: CanvasPoint[] 
}
export interface FetchAction{
  type:CanvasActionTypes.FETCH,
  payload: boolean
}
export interface SelectClientAction{
  type:CanvasActionTypes.SELECT_CLIENT,
  payload: {clientId: number, name: string}
}

export type CanvasGraphAction = 
  GetClientDataAction
  | GetAllDataAction
  | FetchAction
  | SelectClientAction