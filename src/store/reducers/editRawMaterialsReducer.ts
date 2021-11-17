import {
  EditRawMaterialsActions,
  editRawMaterialsActionsTypes,
  IEditRawMaterialsState,
} from "../../types/editRawMaterialsTypes";

const initialState: IEditRawMaterialsState = {
  rawMaterialsList: [

  ],
};

export const editRawMaterialsReducer = (
  state = initialState,
  action: EditRawMaterialsActions
): IEditRawMaterialsState => {
  switch (action.type) {
    case editRawMaterialsActionsTypes.CREATE:
      return {
        ...state,
        rawMaterialsList: [
          ...state.rawMaterialsList,
          { name: action.payload.name, id: action.payload.id },
        ],
      };
    case editRawMaterialsActionsTypes.GET:
      return {
        ...state,
        rawMaterialsList:[ ...action.payload],
      };
    case editRawMaterialsActionsTypes.CHANGE:
      return {
        ...state,
        rawMaterialsList: state.rawMaterialsList.map((rawMaterial) => {
          return rawMaterial.id === action.payload.id
            ? { id: action.payload.id, name: action.payload.name }
            : rawMaterial;
        }),
      };

    default:
      return state;
  }
};
