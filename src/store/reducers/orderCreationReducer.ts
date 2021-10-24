import {
  IOrderCreationState,
  OrderCreationAction,
  orderCreationTypes,
  rawMaterial
} from "../../types/orderCreationTypes";

const initialState: IOrderCreationState = {
  isContentOnRight: false,
  isNextBtnDisabled: true,
  renderCreateButton: false,
  rawMaterialList: [{amount:0, name:''}]
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
    case orderCreationTypes.SET_RAW_MATERIAL:
      return {
        ...state, rawMaterialList:
        state.rawMaterialList.map((rawMaterial: rawMaterial, index: number) => {
          if (index === action.payload.index) {
            return {name:action.payload.name, amount:action.payload.amount}
          }
          return rawMaterial
      })
      };
    case orderCreationTypes.ADD_RAW_MATERIAL:
      return {
        ...state, rawMaterialList:
           [...state.rawMaterialList, {name:'',amount:0}]
      };
    case orderCreationTypes.REMOVE_RAW_MATERIAL:
      const returnedArray = 
        [...state.rawMaterialList.slice(0,action.payload.index),
          ...state.rawMaterialList.slice(action.payload.index+1,)
        ]
      return {
        ...state, rawMaterialList: [...returnedArray]
      };
    default:
      return state;
  }
};
