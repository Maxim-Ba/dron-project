import {
  IModalWindowState,
  ModalWindowActions,
  ModalWindowTypeActions,
  TypesofMW,
} from "../../../types/ModalWindowTypes/ModalWindowTypes";

const initialState: IModalWindowState = {
  confirmLoading: false,
  visible: false,
  typeMV:TypesofMW.CLIENT_CREATE
};

export const modalWindowReducer = (
  state: IModalWindowState = initialState,
  action: ModalWindowActions
): IModalWindowState => {
  switch (action.type) {
    case ModalWindowTypeActions.SET_VISIBLE:
      return {
        ...state,
        visible: action.payload,
      };
    case ModalWindowTypeActions.CONFIRM_LOADING:
      return {
        ...state,
        confirmLoading: action.payload,
      };
      case ModalWindowTypeActions.SET_TYPE:
        return {
          ...state,
          typeMV: action.payload,
        };
    default:
      return state;
  }
};
