import {
  IPriceState,
  PriceActions,
  priceActionsTypes,
} from "../../types/priceTypes";

const initialState: IPriceState = {
  priceList: [],
  isFetchPriceList: false,
  priceNames: [],
  selectedPrice: null,
  fieldForCreationPrice: "",
  redyForDeletePrice: false,
  arrayForChange: null,
  readyForChange:false
};

export const priceReducer = (
  state = initialState,
  action: PriceActions
): IPriceState => {
  switch (action.type) {
    case priceActionsTypes.GET:
      return {
        ...state,
        priceList: [...action.payload],
      };
    case priceActionsTypes.GET_PRICE_NAMES:
      return {
        ...state,
        priceNames: [...action.payload],
      };
    case priceActionsTypes.SELECT_PRICE_NAME:
      return {
        ...state,
        selectedPrice: action.payload,
      };
    case priceActionsTypes.SET_NAME_FOR_CREATE:
      return {
        ...state,
        fieldForCreationPrice: action.payload,
      };
    case priceActionsTypes.READY_FOR_DELETE_PRICE:
      return {
        ...state,
        redyForDeletePrice: action.payload,
      };
    case priceActionsTypes.SET_PRICE_LIST:
      return {
        ...state,
        priceList: [...action.payload],
      };
    case priceActionsTypes.FETCH_PRICE_LIST:
      return {
        ...state,
        isFetchPriceList: action.payload,
      };
      case priceActionsTypes.ARRAY_FOR_CHANGE:
        return {
          ...state,
          arrayForChange: [...action.payload],
        };
        case priceActionsTypes.READY_FOR_CHANGE:
          return {
            ...state,
            readyForChange: action.payload,
          };
    default:
      return state;
  }
};
