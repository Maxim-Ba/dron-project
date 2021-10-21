import { IOrderViewState, OrderViewActions, OrderViewActionTypes } from "../../types/orderViewTypes";

const initialState: IOrderViewState = {
    isDisabled: false,
    isOnRight: false
}

export const viewOrderReducer = (state = initialState, action: OrderViewActions): IOrderViewState => {
    switch (action.type) {
        case OrderViewActionTypes.SET_ON_RIGHT:
            return {
                ...state, isOnRight: true
            }
        case OrderViewActionTypes.SET_ON_LEFT:
            return {
                ...state, isOnRight: false
            }
        case OrderViewActionTypes.SET_DISABLED_NEXT:
            return {
                ...state, isDisabled: true
            }
        case OrderViewActionTypes.SET_UNABLED_NEXT:
            return {
                ...state, isDisabled: false
            }
        default:
            return state
    }
}