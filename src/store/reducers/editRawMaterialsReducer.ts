import {
  EditRawMaterialsActions,
  editRawMaterialsActionsTypes,
  IEditRawMaterialsState,
} from "../../types/editRawMaterialsTypes";

const initialState: IEditRawMaterialsState = {
  rawMaterialsList: [
    { id: 1, name: "govno1" },
    { id: 2, name: "govno2" },
    { id: 3, name: "govno3" },
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
        rawMaterialsList: action.payload,
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
