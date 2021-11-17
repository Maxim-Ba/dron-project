import {
  IOrderCreationState,
  OrderCreationAction,
  orderCreationTypes,
  rawMaterial,
} from "../../types/orderCreationTypes";

const initialState: IOrderCreationState = {
  isContentOnRight: false,
  isNextBtnDisabled: true,
  renderCreateButton: false,
  rawMaterialList: [{ amount: 0, name: "",id:0 }],
  client: null,
  price: null,
  date: null,
};

export const orderCreationReducer = (
  state = initialState,
  action: OrderCreationAction
): IOrderCreationState => {
  switch (action.type) {
    case orderCreationTypes.SET_BUTTON_DISABLED:
      return { ...state, isNextBtnDisabled: true };
    case orderCreationTypes.SET_BUTTON_UNDISABLED:
      return { ...state, isNextBtnDisabled: false };
    case orderCreationTypes.SET_IS_RIGHT:
      return { ...state, isContentOnRight: true };
    case orderCreationTypes.SET_IS_LEFT:
      return { ...state, isContentOnRight: false };
    case orderCreationTypes.RENDER_CREATE_BUTTON:
      return { ...state, isContentOnRight: !state.renderCreateButton };
    case orderCreationTypes.SET_RAW_MATERIAL_NAME:
      return {
        ...state,
        rawMaterialList: state.rawMaterialList.map(
          (rawMaterial: rawMaterial, index: number) => {
            if (index === action.payload.index) {
              return {...rawMaterial,
                name: action.payload.name,
                id:action.payload.id
              };
            }
            return rawMaterial;
          }
        ),
      };

      case orderCreationTypes.REMOVE_RAW_MATERIAL_NAME:
        return {
          ...state,
          rawMaterialList: state.rawMaterialList.map(
            (rawMaterial: rawMaterial, index: number) => {
              if (index === action.payload.index) {
                return {...rawMaterial,
                  name: '',
                  id:0
                };
              }
              return rawMaterial;
            }
          ),
        };
    case orderCreationTypes.SET_RAW_MATERIAL_AMOUNT:
      return {
        ...state,
        rawMaterialList: state.rawMaterialList.map(
          (rawMaterial: rawMaterial, index: number) => {
            if (index === action.payload.index) {
              return { ...rawMaterial,
                amount: action.payload.amount,
              };
            }
            return rawMaterial;
          }
        ),
      };
    case orderCreationTypes.ADD_RAW_MATERIAL:
      return {
        ...state,
        rawMaterialList: [...state.rawMaterialList, { name: "", amount: 0,id:0 }],
      };
    case orderCreationTypes.REMOVE_RAW_MATERIAL:
      const returnedArray = state.rawMaterialList.filter((material, index)=>(
          index!==action.payload.index
        ));
      return {
        ...state,
        rawMaterialList: [...returnedArray],
      };
    case orderCreationTypes.SET_CLIENT:
      return {
        ...state,
        client: action.payload,
      };
    case orderCreationTypes.REMOVE_CLIENT:
      return {
        ...state,
        client: null,
      };
    case orderCreationTypes.SET_PRICE:
      return {
        ...state,
        price: action.payload,
      };
    case orderCreationTypes.REMOVE_PRICE:
      return {
        ...state,
        price: null,
      };
    case orderCreationTypes.SET_DATE:
      return {
        ...state,
        date: action.payload,
      };
    case orderCreationTypes.CLEAR_DATE:
      return {
        ...state,
        date: null,
      };
    default:
      return state;
  }
};
