import { clientActionsTypes, EditClientsActions, IClientsState } from "../../types/editClientsTypes";


const initialState: IClientsState = {
  clientList: [
    { id: 1, name: "nanba",phon:32434234, INN:343234234, extraInformation:"d" },
    { id: 2, name: "343434",phon:32434234, INN:343234234, extraInformation:"d222" },
    { id: 3, name: "govn22222o3",phon:32434234, INN:343234234, extraInformation:"d232323" },
  ],
};

export const editRawMaterialsReducer = (
  state = initialState,
  action: EditClientsActions
): IClientsState => {
  switch (action.type) {
    case clientActionsTypes.CREATE:
      return {
        ...state,
          clientList: [
            ...state.clientList,
            { id: action.payload.id,
              name: action.payload.name,
              INN:action.payload.INN,
              extraInformation:action.payload.extraInformation,
              phon:action.payload.phon,
            }
          ],
      };
    case clientActionsTypes.GET:
      return {
        ...state,
        clientList: action.payload,
      };
    case clientActionsTypes.CHANGE:
      return {
        ...state,
        clientList: state.clientList.map((client) => {
          return client.id === action.payload.id
            ? { id: action.payload.id,
                name: action.payload.name,
                INN:action.payload.INN,
                extraInformation:action.payload.extraInformation,
                phon:action.payload.phon,
              }
            : client;
        }),
      };
    default:
      return state;
  }
};
