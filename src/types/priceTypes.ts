export type PriceType = {
  name: string,
  rawMaterialId: number,
  id: number,
  coast: number | null
}

export interface IPriceState {
  priceList:Array<PriceType>
  priceNames:Array<{
    nameId:string,
    name:string
  }>
}

export enum priceActionsTypes{
  GET="GET",
  GET_ONE_PRICE="GET_ONE_PRICE",
  GET_PRICE_NAMES="GET_PRICE_NAMES",
  CREATE="CREATE",
  CHANGE="CHANGE",
  DELETE="DELETE"
}

interface getPricesAction {
  type:priceActionsTypes.GET,
  payload:Array<PriceType>
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
