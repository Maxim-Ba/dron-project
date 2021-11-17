import { Dispatch } from "redux";
import { ModalWindowActions, ModalWindowTypeActions, TypeMV } from "../../../types/ModalWindowTypes/ModalWindowTypes";

export const setVisibleMW = (flag: boolean) => {
  return async (dispatch: Dispatch<ModalWindowActions>) => {
    dispatch({ type: ModalWindowTypeActions.SET_VISIBLE, payload: flag });
  };
};

export const setConfirmLoadingMW = (flag: boolean) => {
  return async (dispatch: Dispatch<ModalWindowActions>) => {
    dispatch({ type: ModalWindowTypeActions.CONFIRM_LOADING, payload: flag });
  };
};

export const setType = (type:TypeMV

    ) => {
  return async (dispatch: Dispatch<ModalWindowActions>) => {
    dispatch({ type: ModalWindowTypeActions.SET_TYPE, payload: type });
  };
};