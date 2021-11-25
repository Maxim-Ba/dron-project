export type rawMaterial = {
    units:string
    name:string,
    id:number
}
export type Units = {
    name:string,
    id:number
}
export interface IEditRawMaterialsState {
    rawMaterialsList:Array<rawMaterial>,
    readyForDelete:boolean
    materialSelected:number | null,
    units:Units[] | [],
    creationFields:{
        name:string ,
        units:string | null
    },
    valuesForChange:rawMaterial | {}
}

export enum editRawMaterialsActionsTypes{
    GET="GET_MATERIALS",
    GET_ONE_MATERIAL="GET_ONE_MATERIAL",
    CREATE="CREATE",
    CHANGE="CHANGE",
    DELETE="DELETE",
    READY_FOR_DELETE="READY_FOR_DELETE",
    SELECT_MATERIAL="SELECT_MATERIAL",
    SET_MATERIALS_NAME_CREATE="SET_MATERIALS_NAME_CREATE",
    SET_MATERIALS_UNIT_CREATE="SET_MATERIALS_UNITS_CREATE",
    SET_UNITS="SET_UNITS",
    SET_FOR_CHANGES="SET_FOR_CHANGES"

}

interface setUnitsAction {
    type:editRawMaterialsActionsTypes.SET_UNITS,
    payload:Units[]
}

interface seChangesAction {
    type:editRawMaterialsActionsTypes.SET_FOR_CHANGES,
    payload:rawMaterial
}

interface selectMaterialsNameCreateAction {
    type:editRawMaterialsActionsTypes.SET_MATERIALS_NAME_CREATE,
    payload:string
}

interface selectMaterialsUnitCreateAction {
    type:editRawMaterialsActionsTypes.SET_MATERIALS_UNIT_CREATE,
    payload:string | null
}

interface selectMaterialsAction {
    type:editRawMaterialsActionsTypes.SELECT_MATERIAL,
    payload:number | null
}

interface getRawMaterialsAction {
    type:editRawMaterialsActionsTypes.GET,
    payload:Array<rawMaterial>
}

interface readyForDeleteMaterialsAction {
    type:editRawMaterialsActionsTypes.READY_FOR_DELETE,
    payload:boolean
}

interface createRawMaterialAction {
    type:editRawMaterialsActionsTypes.CREATE,
    payload:{name:string, id:number, units:string}
}

interface changeRawMaterialAction {
    type:editRawMaterialsActionsTypes.CHANGE,
    payload:{name:string, id:number, units:string}
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
    | readyForDeleteMaterialsAction
    | selectMaterialsAction
    | selectMaterialsUnitCreateAction
    | selectMaterialsNameCreateAction
    | setUnitsAction
    | seChangesAction