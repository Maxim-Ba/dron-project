import {
  EditRawMaterialsActions,
  editRawMaterialsActionsTypes,
  IEditRawMaterialsState,
} from "../../types/editRawMaterialsTypes";

const initialState: IEditRawMaterialsState = {
  rawMaterialsList: [],
  readyForDelete: false,
  materialSelected: null,
  units: [],
  creationFields: {
    name: "",
    units: null,
  },
  valuesForChange: {},
};

export const editRawMaterialsReducer = (
  state = initialState,
  action: EditRawMaterialsActions
): IEditRawMaterialsState => {
  switch (action.type) {
    // case editRawMaterialsActionsTypes.CREATE:
    //   return {
    //     ...state,
    //     rawMaterialsList: [
    //       ...state.rawMaterialsList,
    //       { name: action.payload.name, id: action.payload.id, units:action.payload.units },
    //     ],
    //   };
    case editRawMaterialsActionsTypes.GET:
      return {
        ...state,
        rawMaterialsList: [...action.payload],
      };
    case editRawMaterialsActionsTypes.SET_MATERIALS_UNIT_CREATE:
      return {
        ...state,
        creationFields: { ...state.creationFields, units: action.payload },
      };
    case editRawMaterialsActionsTypes.SET_MATERIALS_NAME_CREATE:
      return {
        ...state,
        creationFields: { ...state.creationFields, name: action.payload },
      };
    case editRawMaterialsActionsTypes.SELECT_MATERIAL:
      return {
        ...state,
        materialSelected: action.payload,
      };
    case editRawMaterialsActionsTypes.SET_UNITS:
      return {
        ...state,
        units: action.payload,
      };
    case editRawMaterialsActionsTypes.READY_FOR_DELETE:
      return {
        ...state,
        readyForDelete: action.payload,
      };
      case editRawMaterialsActionsTypes.SET_FOR_CHANGES:
        return {
          ...state,
          valuesForChange: {...action.payload},
        };
    default:
      return state;
  }
};
