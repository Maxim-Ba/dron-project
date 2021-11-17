export type TypeMV=
TypesofMW.CLIENT_CHANGE |
TypesofMW.CLIENT_CREATE |
TypesofMW.CLIENT_DELETE 

export interface IModalWindowState {
  visible: boolean,
  confirmLoading: boolean,
  typeMV:  TypeMV
}
export enum TypesofMW {
  CLIENT_CREATE="CLIENT_CREATE",
  CLIENT_DELETE="CLIENT_DELETE",
  CLIENT_CHANGE="CLIENT_CHANGE",

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
