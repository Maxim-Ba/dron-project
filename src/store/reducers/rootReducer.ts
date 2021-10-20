import { combineReducers } from "redux";
import { clientReducer } from "./clientReducer";
import { orderCreationReducer } from "./orderCreationReducer";

export const rootReducer = combineReducers({
  client: clientReducer,
  orderCreation: orderCreationReducer,


});

export type RootState = ReturnType<typeof rootReducer>