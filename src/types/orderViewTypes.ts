import { IDatacolumn, IOrder } from "./dataColumn";


export interface IOrderForChange extends IOrder{
    changedPrice:any[] | number[]
}
export interface NewPriceItem {
    amount:number
    rawMaterialId:number
    name:string
} 
export interface IOrderViewState {
    isOnRight:boolean
    isDisabled:boolean
    selectedClient:null | {id:number, name:string}
    selectedDateStart: null | Date |string
    selectedDateEnd: null | Date | string
    tableData: IDatacolumn[] | []
    isFetch: boolean,
    selectedOrder:IOrderForChange | null
    selectToDeletePriceItem: any[] | number[]
    newPriceItems:NewPriceItem[] | any[],
    editedPriceItems: any[] | number[]
}

export enum OrderViewActionTypes {
    SET_ON_RIGHT="SET_ON_RIGHT",
    SET_ON_LEFT="SET_ON_LEFT",
    SET_DISABLED_NEXT="SET_DISABLED_NEXT",
    SET_UNABLED_NEXT="SET_UNABLED_NEXT",
    SELECT_CLIENT="SELECT_CLIENT",
    SELECT_DATE_END="SELECT_DATE_END",
    SELECT_DATE_START="SELECT_DATE_START",
    SET_TABLE_DATA="SET_TABLE_DATA",
    TOGGLE_FETCH="TOGGLE_FETCH",
    SELECT_ORDER_FOR_CHANGE="SELECT_ORDER_FOR_CHANGE",
    CHANGE_AMOUNT="CHANGE_AMOUNT",
    CHANGE_NEW_AMOUNT="CHANGE_NEW_AMOUNT",
    SET_TO_DELETE="SET_TO_DELETE",
    SELECT_FOR_CHANGE_ID="SELECT_FOR_CHANGE_ID",
    ADD_NEW_PRICE_ITEM="ADD_NEW_PRICE_ITEM",
    SELECT_RAW_MATERIAL="SELECT_RAW_MATERIAL",
    RESET_NEW_PRICE_ITEM="RESET_NEW_PRICE_ITEM",
    PUSH_TO_EDIT_ARRAY_P_ITEM="PUSH_TO_EDIT_ARRAY_P_ITEM",
    POP_FROM_EDIT_ARRAY_P_ITEM="POP_FROM_EDIT_ARRAY_P_ITEM"
}
interface IPopFromEditPriceItemAction {
    type:OrderViewActionTypes.POP_FROM_EDIT_ARRAY_P_ITEM,
    payload: number
}
interface IPushToEditPriceItemAction {
    type:OrderViewActionTypes.PUSH_TO_EDIT_ARRAY_P_ITEM,
    payload: number
}
interface IResetNewPriceItemAction {
    type:OrderViewActionTypes.RESET_NEW_PRICE_ITEM,
}
interface ISelectRawMaterialAction {
    type:OrderViewActionTypes.SELECT_RAW_MATERIAL,
    payload: {id:number | null, name:string, index:number}
}

interface IAddNewPriceItemAction {
    type:OrderViewActionTypes.ADD_NEW_PRICE_ITEM,
    payload: NewPriceItem
}

interface ISelectForChangeIdAction {
    type:OrderViewActionTypes.SELECT_FOR_CHANGE_ID,
    payload: number 
}
interface ISetToDeleteAction {
    type:OrderViewActionTypes.SET_TO_DELETE,
    payload: number 
}
interface ISelectOrderAction {
    type:OrderViewActionTypes.SELECT_ORDER_FOR_CHANGE,
    payload: number
}
interface IToggleFetchAction {
    type:OrderViewActionTypes.TOGGLE_FETCH,
    payload: boolean
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
interface IChangeAmountAction {
    type:OrderViewActionTypes.CHANGE_AMOUNT
    payload: {
        id:number,
        amount: number
    }
}
interface IChangeNewAmountAction {
    type:OrderViewActionTypes.CHANGE_NEW_AMOUNT
    payload: {
        index:number,
        amount: number
    }
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
    | IToggleFetchAction
    | ISelectOrderAction
    | IChangeAmountAction
    | ISetToDeleteAction
    | ISelectForChangeIdAction
    | IAddNewPriceItemAction
    | ISelectRawMaterialAction
    | IResetNewPriceItemAction
    | IChangeNewAmountAction
    | IPushToEditPriceItemAction
    | IPopFromEditPriceItemAction