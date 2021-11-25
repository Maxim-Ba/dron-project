export type PriceType = {
  id: number,
  coast: number | null
  rawMaterialId: number,
  name: string,
}

export interface IPriceState {
  priceList:Array<PriceType>
  isFetchPriceList:boolean
  priceNames:Array<{
    nameId:string | number,
    name:string
  }>
  selectedPrice:number | null,
  fieldForCreationPrice: string,
  redyForDeletePrice:boolean,
  arrayForChange:Array<{coast:number, id:number}> | null,
  readyForChange:boolean

}

export enum priceActionsTypes{
  GET="GET",
  GET_ONE_PRICE="GET_ONE_PRICE",
  GET_PRICE_NAMES="GET_PRICE_NAMES",
  CREATE="CREATE",
  CHANGE="CHANGE",
  DELETE="DELETE",
  SELECT_PRICE_NAME="SELECT_PRICE_NAME",
  SET_NAME_FOR_CREATE="SET_NAME_FOR_CREATE",
  SET_NAME_FOR_CHANGE="SET_NAME_FOR_CHANGE",
  READY_FOR_DELETE_PRICE="READY_FOR_DELETE_PRICE",
  SET_PRICE_LIST="SET_PRICE_LIST",
  FETCH_PRICE_LIST="FETCH_PRICE_LIST",
  ARRAY_FOR_CHANGE="ARRAY_FOR_CHANGE",
  READY_FOR_CHANGE="READY_FOR_CHANGE"
}

interface raedyForChangrPriceAction {
  type:priceActionsTypes.READY_FOR_CHANGE,
  payload:boolean
}

interface arrayForChangrPriceAction {
  type:priceActionsTypes.ARRAY_FOR_CHANGE,
  payload:Array<{coast:number, id:number}> 
}

interface fetchPriceListAction {
  type:priceActionsTypes.FETCH_PRICE_LIST,
  payload:boolean
}

interface setPriceListAction {
  type:priceActionsTypes.SET_PRICE_LIST,
  payload:PriceType[]
}

interface readyForDeletePriceAction {
  type:priceActionsTypes.READY_FOR_DELETE_PRICE,
  payload:boolean
}

interface setNameForCreationAction {
  type:priceActionsTypes.SET_NAME_FOR_CREATE,
  payload:string
}

interface getPricesAction {
  type:priceActionsTypes.GET,
  payload:Array<PriceType>
}

interface SelectPriceNameAction {
  type:priceActionsTypes.SELECT_PRICE_NAME,
  payload:number|null
}

interface getPriceAction {
  type:priceActionsTypes.GET_ONE_PRICE,
  payload:PriceType
}

interface getPriceNamesAction {
  type:priceActionsTypes.GET_PRICE_NAMES,
  payload:Array<{
    nameId:string,
    name:string
  }>
}

interface createPriceAction {
  type:priceActionsTypes.CREATE,
  payload:PriceType
}

interface changePricetAction {
  type:priceActionsTypes.CHANGE,
  payload:PriceType
}
interface deletePriceAction {
  type:priceActionsTypes.DELETE,
  payload:{id:number}
}
export type PriceActions = 
getPricesAction
| getPriceAction
| getPriceNamesAction
| createPriceAction
| changePricetAction
| deletePriceAction
| SelectPriceNameAction
| setNameForCreationAction
| readyForDeletePriceAction
| setPriceListAction
| fetchPriceListAction
| arrayForChangrPriceAction
| raedyForChangrPriceAction
