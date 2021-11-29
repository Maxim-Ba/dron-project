import { IDatacolumn } from "./dataColumn";

export interface IOrderViewState {
    isOnRight:boolean,
    isDisabled:boolean,
    selectedClient:null | {id:number, name:string}
    selectedDateStart: null | Date |string
    selectedDateEnd: null | Date | string
    tableData: IDatacolumn[] | []
}

export enum OrderViewActionTypes {
    SET_ON_RIGHT="SET_ON_RIGHT",
    SET_ON_LEFT="SET_ON_LEFT",
    SET_DISABLED_NEXT="SET_DISABLED_NEXT",
    SET_UNABLED_NEXT="SET_UNABLED_NEXT",
    SELECT_CLIENT="SELECT_CLIENT",
    SELECT_DATE_END="SELECT_DATE_END",
    SELECT_DATE_START="SELECT_DATE_START",
    SET_TABLE_DATA="SET_TABLE_DATA"
}

interface ISetTableDataAction {
    type:OrderViewActionTypes.SET_TABLE_DATA,
    payload: IDatacolumn[] | []
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
interface ISelectClientAction {
    type:OrderViewActionTypes.SELECT_CLIENT,
    payload: null | {id:number, name:string}
}
interface ISelectDateStartAction {
    type:OrderViewActionTypes.SELECT_DATE_START
    payload: null | Date
}
interface ISelectDateEndAction {
    type:OrderViewActionTypes.SELECT_DATE_END
    payload: null | Date
}
export type OrderViewActions = 
    | ISetOnRightAction
    | ISetOnLeftAction
    | ISetDisabledNextAction
    | ISetUnableNextAction
    | ISelectClientAction
    | ISelectDateStartAction
    | ISelectDateEndAction
    | ISetTableDataAction
