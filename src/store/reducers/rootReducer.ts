import { combineReducers } from "redux";
import { editClientsReducer } from "./editClientsReducer";
import { editRawMaterialsReducer } from "./editRawMaterialsReducer";
import { modalWindowReducer } from "./ModalWindowReducer/SetConfirmLoading";
import { optionReducer } from "./optionsReducer";
import { orderCreationReducer } from "./orderCreationReducer";
import { viewOrderReducer } from "./orderViewReducer";
import { priceReducer } from "./priceReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
  orderCreation: orderCreationReducer,
  viewOrder: viewOrderReducer,
  options: optionReducer,
  user: userReducer,
  clients: editClientsReducer,
  price: priceReducer,
  rawMaterials: editRawMaterialsReducer,
  modalWindow:modalWindowReducer,

});

export type RootState = ReturnType<typeof rootReducer>