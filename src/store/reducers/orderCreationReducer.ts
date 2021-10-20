import {
  IOrderCreationState,
  OrderCreationAction,
  orderCreationTypes,
} from "../../types/orderCreationTypes";

const initialState: IOrderCreationState = {
  isContentOnRight: false,
  isNextBtnDisabled: true,
  renderCreateButton: false,
};

export const orderCreationReducer = (
  state = initialState,
  action: OrderCreationAction
): IOrderCreationState => {
  switch (action.type) {
    case orderCreationTypes.SET_BUTTON_DISABLED:
      return { ...state, isNextBtnDisabled: true };
      case orderCreationTypes.SET_BUTTON_UNDISABLED:
        return { ...state, isNextBtnDisabled: false };
    case orderCreationTypes.SET_IS_RIGHT:
      return { ...state, isContentOnRight: true };
      case orderCreationTypes.SET_IS_LEFT:
        return { ...state, isContentOnRight: false };
    case orderCreationTypes.RENDER_CREATE_BUTTON:
      return { ...state, isContentOnRight: !state.renderCreateButton };
    default:
      return state;
  }
};
