export interface rawMaterial {
  name: string,
  amount: number,
  id:number
}
interface Client {
  id:number,
  name:string
}

interface Price{
  id:number
  name:string
}

export interface ICreateOrderAPI {
  client: Client
  price: Price
  date: Date | null | string
  rawMaterialList:Array<rawMaterial>
}

export interface IOrderCreationState {
  isContentOnRight?: boolean,
  isNextBtnDisabled?: boolean,
  renderCreateButton?: boolean,
  rawMaterialList: Array<rawMaterial> ,
  client: Client | null,
  price: Price | null,
  date: Date | null | string,
  isFetch: boolean
}

export enum orderCreationTypes {
  SET_IS_RIGHT="SET_IS_RIGHT",
  SET_IS_LEFT="SET_IS_LEFT",
  SET_BUTTON_DISABLED="SET_BUTTON_DISABLED",
  SET_BUTTON_UNDISABLED="SET_BUTTON_UNDISABLED",
  RENDER_CREATE_BUTTON="RENDER_CREATE_BUTTON",
  ADD_RAW_MATERIAL="ADD_RAW_MATERIAL",
  SET_RAW_MATERIAL_NAME="SET_RAW_MATERIAL_NAME",
  SET_RAW_MATERIAL_AMOUNT="SET_RAW_MATERIAL_AMOUNT",
  REMOVE_RAW_MATERIAL="REMOVE_RAW_MATERIAL",
  TOGGLE_FETCH="TOGGLE_FETCH",

  REMOVE_RAW_MATERIAL_NAME="REMOVE_RAW_MATERIAL_NAME",
  CLEAR_RAW_MATERIALS="CLEAR_RAW_MATERIALS",
  SET_CLIENT="SET_CLIENT",
  REMOVE_CLIENT="REMOVE_CLIENT",
  SET_PRICE="SET_PRICE",
  REMOVE_PRICE="REMOVE_PRICE",
  SET_DATE="SET_DATE",
  CLEAR_DATE="CLEAR_DATE"
}
interface IClearRawMaterialsdAction {
  type: orderCreationTypes.CLEAR_RAW_MATERIALS,
}
interface IBtnDisabledAction {
  type: orderCreationTypes.SET_BUTTON_DISABLED,
}
interface IToggleFetchAction {
  type: orderCreationTypes.TOGGLE_FETCH,
  payload:boolean
}
interface IBtnUndisabledAction {
  type: orderCreationTypes.SET_BUTTON_UNDISABLED,
}
interface IIsRightAction {
  type: orderCreationTypes.SET_IS_RIGHT,
}
interface IIsLeftAction {
  type: orderCreationTypes.SET_IS_LEFT,
}
interface IRenderCreateBtnAction {
  type: orderCreationTypes.RENDER_CREATE_BUTTON,
}
interface IAddRawMaterialAction {
  type: orderCreationTypes.ADD_RAW_MATERIAL,
}
interface ISetRawMaterialNameAction {
  type: orderCreationTypes.SET_RAW_MATERIAL_NAME,
  payload: {name:string, index:number, id:number}
}

interface IRemoveRawMaterialNameAction {
  type: orderCreationTypes.REMOVE_RAW_MATERIAL_NAME,
  payload: { index:number}
}

interface ISetRawMaterialAmountAction {
  type: orderCreationTypes.SET_RAW_MATERIAL_AMOUNT,
  payload: {amount:number, index:number}
}
interface IRemoveRawMaterialAction {
  type: orderCreationTypes.REMOVE_RAW_MATERIAL,
  payload: {index:number}
}
interface ISetClientAction {
  type: orderCreationTypes.SET_CLIENT,
  payload:Client
}
interface IRemoveClientAction {
  type: orderCreationTypes.REMOVE_CLIENT,
}
interface ISetPriceAction {
  type: orderCreationTypes.SET_PRICE,
  payload:Price
}
interface IRemovePriceAction {
  type: orderCreationTypes.REMOVE_PRICE,
}
interface ISetDateAction {
  type: orderCreationTypes.SET_DATE,
  payload:Date | string
}
interface IRemoveDateAction {
  type: orderCreationTypes.CLEAR_DATE,
}
export type OrderCreationAction = 
  IBtnDisabledAction 
  | IIsRightAction 
  | IIsLeftAction 
  | IRenderCreateBtnAction
  | IBtnUndisabledAction
  | IAddRawMaterialAction
  | IRemoveRawMaterialAction
  | ISetRawMaterialNameAction
  | ISetRawMaterialAmountAction
  | ISetClientAction
  | IRemoveClientAction
  | ISetPriceAction
  | IRemovePriceAction
  | ISetDateAction
  | IRemoveDateAction
  | IRemoveRawMaterialNameAction
  | IToggleFetchAction
  | IClearRawMaterialsdAction