import { combineReducers } from "redux";
import { optionReducer } from "./optionsReducer";
import { orderCreationReducer } from "./orderCreationReducer";
import { viewOrderReducer } from "./orderViewReducer";

export const rootReducer = combineReducers({
  orderCreation: orderCreationReducer,
  viewOrder: viewOrderReducer,
  options: optionReducer,

});

export type RootState = ReturnType<typeof rootReducer>