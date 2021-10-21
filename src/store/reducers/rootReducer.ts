import { combineReducers } from "redux";
import { clientReducer } from "./clientReducer";
import { orderCreationReducer } from "./orderCreationReducer";
import { viewOrderReducer } from "./orderViewReducer";

export const rootReducer = combineReducers({
  client: clientReducer,
  orderCreation: orderCreationReducer,
  viewOrder: viewOrderReducer

});

export type RootState = ReturnType<typeof rootReducer>