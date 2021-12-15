import {
  IOrderViewState,
  OrderViewActions,
  OrderViewActionTypes,
  IOrderForChange
} from "../../types/orderViewTypes";

const initialState: IOrderViewState = {
  isDisabled: false,
  isOnRight: false,
  selectedClient: null,
  selectedDateStart: null,
  selectedDateEnd: null,
  tableData: [],
  isFetch: false,
  // EDIT
  selectedOrder: null,
  selectToDeletePriceItem: [],
  newPriceItems: [],
  editedPriceItems:[],
};

export const viewOrderReducer = (
  state = initialState,
  action: OrderViewActions
): IOrderViewState => {
  switch (action.type) {
    case OrderViewActionTypes.TOGGLE_FETCH:
      return {
        ...state,
        isFetch: action.payload,
      };
    case OrderViewActionTypes.SET_ON_RIGHT:
      return {
        ...state,
        isOnRight: true,
      };
    case OrderViewActionTypes.SET_ON_LEFT:
      return {
        ...state,
        isOnRight: false,
      };
    case OrderViewActionTypes.SET_DISABLED_NEXT:
      return {
        ...state,
        isDisabled: true,
      };
    case OrderViewActionTypes.SET_UNABLED_NEXT:
      return {
        ...state,
        isDisabled: false,
      };
    case OrderViewActionTypes.SELECT_CLIENT:
      return {
        ...state,
        selectedClient: action.payload,
      };
    case OrderViewActionTypes.SELECT_DATE_START:
      return {
        ...state,
        selectedDateStart: action.payload,
      };
    case OrderViewActionTypes.SELECT_DATE_END:
      return {
        ...state,
        selectedDateEnd: action.payload,
      };
    case OrderViewActionTypes.SET_TABLE_DATA:
      return {
        ...state,
        tableData: [...action.payload],
      };
    case OrderViewActionTypes.SELECT_ORDER_FOR_CHANGE:
      let selectedOrder: IOrderForChange = {
        orderId: null,
        date: "",
        materialList: [],
        price: 0,
        changedPrice: [],
      };
      state.tableData.forEach((client) => {
        for (let i = 0; i < client.orders.length; i++) {
          if (client.orders[i].orderId === action.payload) {
            selectedOrder = {...client.orders[i], changedPrice:[]};
            break;
          }
        }
      });

      return {
        ...state,
        selectedOrder: {
          ...selectedOrder,
          materialList: [...selectedOrder.materialList],
        },
      };
    case OrderViewActionTypes.SET_TO_DELETE:
      if (state.selectToDeletePriceItem?.includes(action.payload)) {
        return {
          ...state,
          selectToDeletePriceItem: [
            ...state.selectToDeletePriceItem.filter((item) => {
              return item !== action.payload;
            }),
          ],
        };
      }
      return {
        ...state,
        selectToDeletePriceItem: [
          ...state.selectToDeletePriceItem,
          action.payload,
        ],
      };
      case OrderViewActionTypes.ADD_NEW_PRICE_ITEM:
        return {
          ...state,
          newPriceItems: [...state.newPriceItems, action.payload],
        };
        case OrderViewActionTypes.RESET_NEW_PRICE_ITEM:
          return {
            ...state,
            newPriceItems: [],
            selectToDeletePriceItem:[],
            editedPriceItems:[]
          };
          case OrderViewActionTypes.CHANGE_NEW_AMOUNT:
            return {
              ...state,
              newPriceItems: state.newPriceItems.map((item,index)=>{
                if (index===action.payload.index) {
                  return ({...item,amount:action.payload.amount});
                }
                return item;
              }),
            };
            case OrderViewActionTypes.CHANGE_AMOUNT:
              const index = state.selectedOrder?.materialList.findIndex(item=>item.rawMaterialId ===action.payload.id);
              if (state.selectedOrder) {
                return {
                  ...state,
                    selectedOrder: {
                      ...state.selectedOrder,
                      changedPrice:[...state.selectedOrder.changedPrice, action.payload.id] ,
                      materialList: state.selectedOrder.materialList.map((item,i)=>{
                        if (i===index) {
                          return {...item, amount:action.payload.amount};
                        }
                        return item;
                      })
                    }
                };
              }
              return state;
              case OrderViewActionTypes.SELECT_RAW_MATERIAL:
                return {
                  ...state,
                    newPriceItems:state.newPriceItems.map((item,index)=>{
                      if (index===action.payload?.index) {
                        return ({...item, rawMaterialId:action.payload.id, name: action.payload.name});
                      }
                      return item;
                    }),
                };
                case OrderViewActionTypes.PUSH_TO_EDIT_ARRAY_P_ITEM:
                  const editIndex = state.editedPriceItems?.findIndex((item)=>item === action.payload);
                  if (editIndex === -1) {
                    return {
                      ...state,
                        editedPriceItems: [...state.editedPriceItems,action.payload]
                    };
                  }
                  return state;
                  // case OrderViewActionTypes.POP_FROM_EDIT_ARRAY_P_ITEM:
                  //   const removedIndex = state.editedPriceItems?.findIndex((item)=>item === action.payload);
                  //   console.log(removedIndex,'removedIndex')
                  //   if (removedIndex !== -1) {
                  //     return {
                  //       ...state,
                  //         editedPriceItems: [...state.editedPriceItems.filter((item,index)=>index !== removedIndex )]
                  //     };
                  //   }
                  //   return state;
                  
    default:
      return state;
  }
};
