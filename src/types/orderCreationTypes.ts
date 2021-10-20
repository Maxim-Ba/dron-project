export interface IOrderCreationState {
  isContentOnRight: boolean,
  isNextBtnDisabled: boolean,
  renderCreateButton:boolean
}

export enum orderCreationTypes {
  SET_IS_RIGHT="SET_IS_RIGHT",
  SET_IS_LEFT="SET_IS_LEFT",
  SET_BUTTON_DISABLED="SET_BUTTON_DISABLED",
  SET_BUTTON_UNDISABLED="SET_BUTTON_UNDISABLED",
  RENDER_CREATE_BUTTON="RENDER_CREATE_BUTTON"
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

export type OrderCreationAction = 
  IBtnDisabledAction 
  | IIsRightAction 
  | IIsLeftAction 
  | IRenderCreateBtnAction
  | IBtnUndisabledAction