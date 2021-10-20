import { ClientAction, ClientActionTypes } from "./../../types/clientsTypes";
import { IClientState } from "../../types/clientsTypes";

const initialState: IClientState = {
  isFetching: false,
  clients: [],
  error: null,
};

export const clientReducer = (
  state = initialState,
  action: ClientAction
): IClientState => {
  switch (action.type) {
    case ClientActionTypes.FETCH_CLIENTS:
      return { ...state, isFetching: action.payload };
    case ClientActionTypes.SET_CLIENTS:
      return { ...state, clients: action.payload };

    case ClientActionTypes.SET_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
