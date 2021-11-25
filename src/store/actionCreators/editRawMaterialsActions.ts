import { Dispatch } from "redux";
import { EditRawMaterialsActions, editRawMaterialsActionsTypes, rawMaterial } from "../../types/editRawMaterialsTypes";

export const deleteRawMaterial = (id: number) => {
    return async (dispatch: Dispatch<EditRawMaterialsActions>) => {
        // fetch delete
        const fetchResult = { id: 2 };
        dispatch({ type: editRawMaterialsActionsTypes.DELETE, payload: fetchResult });
    };
};

export const createRawMaterial = (name: string, units:string) => {
    return async (dispatch: Dispatch<EditRawMaterialsActions>) => {
        // fetch post
        const fetchResult = { name: 'asd222asd', id: 7, units:''};
        dispatch({ type: editRawMaterialsActionsTypes.CREATE, payload: fetchResult   });
    };
};

export const changeRawMaterial = (name: string, id: number, units:string) => {
    return async (dispatch: Dispatch<EditRawMaterialsActions>) => {
        // fetch put
        const fetchResult = { name: 'asd222asd', id: 7, units:'' };
        dispatch({ type: editRawMaterialsActionsTypes.CHANGE, payload: fetchResult });
    };
};

export const getRawMaterials = (materials:any[]) => {
    return async (dispatch: Dispatch<EditRawMaterialsActions>) => {
        dispatch({ type: editRawMaterialsActionsTypes.GET, payload: materials });
    };
};
export const readyForDeleteMaterial = (flag:boolean) => {
    return async (dispatch: Dispatch<EditRawMaterialsActions>) => {
        dispatch({ type: editRawMaterialsActionsTypes.READY_FOR_DELETE, payload: flag });
    };
};
export const selectMaterial = (id:number | null) => {
    return async (dispatch: Dispatch<EditRawMaterialsActions>) => {
        dispatch({ type: editRawMaterialsActionsTypes.SELECT_MATERIAL, payload: id });
    };
};
export const setMaterialName = (name:string) => {
    return async (dispatch: Dispatch<EditRawMaterialsActions>) => {
        dispatch({ type: editRawMaterialsActionsTypes.SET_MATERIALS_NAME_CREATE, payload: name });
    };
};
export const setMaterialUnit = (unit:string | null) => {
    return async (dispatch: Dispatch<EditRawMaterialsActions>) => {
        dispatch({ type: editRawMaterialsActionsTypes.SET_MATERIALS_UNIT_CREATE, payload: unit });
    };
};
export const getUnits = (units:Array<any>) => {
    return async (dispatch: Dispatch<EditRawMaterialsActions>) => {
        dispatch({ type: editRawMaterialsActionsTypes.SET_UNITS, payload: units });
    };
};

export const setChanges = (newMaterial:rawMaterial) => {
    return async (dispatch: Dispatch<EditRawMaterialsActions>) => {
        dispatch({ type: editRawMaterialsActionsTypes.SET_FOR_CHANGES, payload: newMaterial });
    };
};