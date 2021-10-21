interface rawMaterial {
  name:string,
  amount:number
}
export interface IOrderCreationState {
  isContentOnRight: boolean,
  isNextBtnDisabled: boolean,
  renderCreateButton:boolean,
  rawMaterialList: Array<rawMaterial> 
}

export enum orderCreationTypes {
  SET_IS_RIGHT="SET_IS_RIGHT",
  SET_IS_LEFT="SET_IS_LEFT",
  SET_BUTTON_DISABLED="SET_BUTTON_DISABLED",
  SET_BUTTON_UNDISABLED="SET_BUTTON_UNDISABLED",
  RENDER_CREATE_BUTTON="RENDER_CREATE_BUTTON",
  ADD_RAW_MATERIAL="ADD_RAW_MATERIAL",
  SET_RAW_MATERIAL="SET_RAW_MATERIAL",
  REMOVE_RAW_MATERIAL="REMOVE_RAW_MATERIAL",

}

interface IBtnDisabledAction {
  type: orderCreationTypes.SET_BUTTON_DISABLED,
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
interface ISetRawMaterialAction {
  type: orderCreationTypes.SET_RAW_MATERIAL,
  payload: rawMaterial
}
interface IRemoveRawMaterialAction {
  type: orderCreationTypes.REMOVE_RAW_MATERIAL,
  payload: {index:number}
}

export type OrderCreationAction = 
  IBtnDisabledAction 
  | IIsRightAction 
  | IIsLeftAction 
  | IRenderCreateBtnAction
  | IBtnUndisabledAction
  | IAddRawMaterialAction
  | IRemoveRawMaterialAction
  | ISetRawMaterialAction