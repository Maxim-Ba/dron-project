export type TypeMV=
TypesofMW.CLIENT_CHANGE |
TypesofMW.CLIENT_CREATE |
TypesofMW.CLIENT_DELETE |
TypesofMW.RAW_MATERIALS_CHANGE |
TypesofMW.RAW_MATERIALS_CREATE |
TypesofMW.RAW_MATERIALS_DELETE |
TypesofMW.PRICE_CHANGE |
TypesofMW.PRICE_DELETE |
TypesofMW.PRICE_CREATE |
TypesofMW.ORDER_CHANGE

export interface IModalWindowState {
  visible: boolean,
  confirmLoading: boolean,
  typeMV:  TypeMV
}
export enum TypesofMW {
  CLIENT_CREATE="CLIENT_CREATE",
  CLIENT_DELETE="CLIENT_DELETE",
  CLIENT_CHANGE="CLIENT_CHANGE",
  RAW_MATERIALS_CREATE="RAW_MATERIALS_CREATE",
  RAW_MATERIALS_DELETE="RAW_MATERIALS_DELETE",
  RAW_MATERIALS_CHANGE="RAW_MATERIALS_CHANGE",
  PRICE_CREATE="PRICE_CREATE",
  PRICE_DELETE="PRICE_DELETE",
  PRICE_CHANGE="PRICE_CHANGE",
  ORDER_CHANGE="ORDER_CHANGE",

} ;
export enum ModalWindowTypeActions {
  SET_VISIBLE="SET_VISIBLE",
  CONFIRM_LOADING="CONFIRM_LOADING",
  SET_TYPE="SET_TYPE",
} ;

interface SetVisible {
  type:ModalWindowTypeActions.SET_VISIBLE,
  payload: boolean
}

interface SetConfirmLoading {
  type:ModalWindowTypeActions.CONFIRM_LOADING,
  payload: boolean
}

interface SetType {
  type:ModalWindowTypeActions.SET_TYPE,
  payload: TypeMV
}
export type ModalWindowActions = SetVisible | SetConfirmLoading | SetType
