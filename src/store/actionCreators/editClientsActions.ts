import { Dispatch } from "redux";
import {
  clientActionsTypes,
  ClientType,
  EditClientsActions,
} from "../../types/editClientsTypes";

export const deleteClient = (id: number) => {
  return async (dispatch: Dispatch<EditClientsActions>) => {
    // fetch delete
    const fetchResult = { id: 2 };
    dispatch({ type: clientActionsTypes.DELETE, payload: fetchResult });
  };
};

export const createClient = ({ INN, id, name, phon }: ClientType) => {
  return async (dispatch: Dispatch<EditClientsActions>) => {
    // fetch post
    const fetchResult: ClientType = {
      name: "asd222asd",
      id: 7,
      phon: 234,
      INN: 7722213123,
      extraInformation: "",
    };
    dispatch({ type: clientActionsTypes.CREATE, payload: fetchResult });
  };
};

export const changeClient = ({ INN, id, name, phon }: ClientType) => {
  return async (dispatch: Dispatch<EditClientsActions>) => {
    // fetch put
    const fetchResult = {
      name: "asd222asd",
      id: 7,
      phon: 234,
      INN: 7722213123,
      extraInformation:"string"
    };
    dispatch({ type: clientActionsTypes.CHANGE, payload: fetchResult });
  };
};

export const getClient = () => {
  return async (dispatch: Dispatch<EditClientsActions>) => {
    // fetch get
    const fetchResult = [
      { name: "asd222asd", id: 7, phon: 234, INN: 7722213123, extraInformation:"string"
    },
    ];
    dispatch({ type: clientActionsTypes.GET, payload: fetchResult });
  };
};
