import {
  clientActionsTypes,
  EditClientsActions,
  IClientsState,
} from "../../types/editClientsTypes";

const initialState: IClientsState = {
  clientList: [],
  formFields: {
    name: "",
    inn: null,
    phone: null,
  },
  isSelect: null,
  selectedClientsFields: {
    name: "",
    inn: null,
    phone: null,
    id: 1,
  },
  readyForDelete:false,
  isFetching:false
};

export const editClientsReducer = (
  state = initialState,
  action: EditClientsActions
): IClientsState => {
  switch (action.type) {
    case clientActionsTypes.GET:
      return {
        ...state,
        clientList: [...action.payload],
      };
    case clientActionsTypes.SET_NAME_CLIENT:
      return {
        ...state,
        formFields: {
          ...state.formFields,
          name: action.payload,
        },
      };
    case clientActionsTypes.SET_PHONE_CLIENT:
      return {
        ...state,
        formFields: {
          ...state.formFields,
          phone: action.payload,
        },
      };
    case clientActionsTypes.SET_INN_CLIENT:
      return {
        ...state,
        formFields: {
          ...state.formFields,
          inn: action.payload,
        },
      };
      case clientActionsTypes.SET_NAME_CLIENT_FOR_CHANGE:
        return {
          ...state,
          selectedClientsFields: {
            ...state.selectedClientsFields,
            name: action.payload,
          },
        };
      case clientActionsTypes.SET_PHONE_CLIENT_FOR_CHANGE:
        return {
          ...state,
          selectedClientsFields: {
            ...state.selectedClientsFields,
            phone: action.payload,
          },
        };
      case clientActionsTypes.SET_INN_CLIENT_FOR_CHANGE:
        return {
          ...state,
          selectedClientsFields: {
            ...state.selectedClientsFields,
            inn: action.payload,
          },
        };
    case clientActionsTypes.SELECT_CLIENT:
      return {
        ...state,
        selectedClientsFields:
          state.clientList.find((client, index) => {
            return index === action.payload;
          }) || state.selectedClientsFields,
        isSelect: action.payload,
      };
      case clientActionsTypes.READY_FOR_DELETE:
        return {
          ...state,
            readyForDelete:action.payload
          };
          case clientActionsTypes.TOGGLE_FETCH:
            return {
              ...state,
                isFetching:action.payload
              };
    default:
      return state;
  }
};
