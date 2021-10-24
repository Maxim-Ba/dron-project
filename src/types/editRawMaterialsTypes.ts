export type rawMaterial = {
    name:string,
    id:number
}
export interface IEditRawMaterialsState {
    rawMaterialsList:Array<rawMaterial>
}

export enum editRawMaterialsActionsTypes{
    GET="GET",
    CREATE="CREATE",
    CHANGE="CHANGE",
    DELETE="DELETE"
}

interface getRawMaterialsAction {
    type:editRawMaterialsActionsTypes.GET,
    payload:Array<rawMaterial>
}

interface createRawMaterialAction {
    type:editRawMaterialsActionsTypes.CREATE,
    payload:{name:string, id:number}
}

interface changeRawMaterialAction {
    type:editRawMaterialsActionsTypes.CHANGE,
    payload:{name:string, id:number}
}
interface deleteRawMaterialAction {
    type:editRawMaterialsActionsTypes.DELETE,
    payload:{ id:number}
}
export type EditRawMaterialsActions =  
    getRawMaterialsAction
    | createRawMaterialAction
    | changeRawMaterialAction
    | deleteRawMaterialAction