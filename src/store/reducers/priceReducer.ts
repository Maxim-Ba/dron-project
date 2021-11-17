import {
  IPriceState,
  PriceActions,
  priceActionsTypes,
} from "../../types/priceTypes";

const initialState: IPriceState = {
  priceList: [],
  priceNames: [],
};

export const priceReducer = (
  state = initialState,
  action: PriceActions
): IPriceState => {
  switch (action.type) {
    case priceActionsTypes.GET:

      return {
        ...state, priceList:[...action.payload]
      };    
      // case priceActionsTypes.GET_ONE_PRICE:
      //   break;
    case priceActionsTypes.GET_PRICE_NAMES:
      return {
        ...state, priceNames:[...action.payload]
      };    
    // case priceActionsTypes.CREATE:
    //   break;
    // case priceActionsTypes.CHANGE:
    //   break;
    // case priceActionsTypes.DELETE:
    //   break;
    default:
      return state;
  }
};
