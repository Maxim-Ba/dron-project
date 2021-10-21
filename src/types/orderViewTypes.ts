export interface IOrderViewState {
    isOnRight:boolean,
    isDisabled:boolean,
}

export enum OrderViewActionTypes {
    SET_ON_RIGHT="SET_ON_RIGHT",
    SET_ON_LEFT="SET_ON_LEFT",
    SET_DISABLED_NEXT="SET_DISABLED_NEXT",
    SET_UNABLED_NEXT="SET_UNABLED_NEXT",
}

interface ISetOnRightAction {
    type:OrderViewActionTypes.SET_ON_RIGHT
}
interface ISetOnLeftAction {
    type:OrderViewActionTypes.SET_ON_LEFT
}
interface ISetDisabledNextAction {
    type:OrderViewActionTypes.SET_DISABLED_NEXT
}
interface ISetUnableNextAction {
    type:OrderViewActionTypes.SET_UNABLED_NEXT
}

export type OrderViewActions = 
    | ISetOnRightAction
    | ISetOnLeftAction
    | ISetDisabledNextAction
    | ISetUnableNextAction
