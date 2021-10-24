import { Dispatch } from "redux";
import { EditRawMaterialsActions, editRawMaterialsActionsTypes } from "../../types/editRawMaterialsTypes";

export const deleteRawMaterial = (id: number) => {
    return async (dispatch: Dispatch<EditRawMaterialsActions>) => {
        // fetch delete
        const fetchResult = { id: 2 }
        dispatch({ type: editRawMaterialsActionsTypes.DELETE, payload: fetchResult });
    };
};

export const createRawMaterial = (name: string) => {
    return async (dispatch: Dispatch<EditRawMaterialsActions>) => {
        // fetch post
        const fetchResult = { name: 'asd222asd', id: 7 }
        dispatch({ type: editRawMaterialsActionsTypes.CREATE, payload: fetchResult });
    };
};

export const changeRawMaterial = (name: string, id: number) => {
    return async (dispatch: Dispatch<EditRawMaterialsActions>) => {
        // fetch put
        const fetchResult = { name: 'asd222asd', id: 7 }
        dispatch({ type: editRawMaterialsActionsTypes.CHANGE, payload: fetchResult });
    };
};

export const getRawMaterials = () => {
    return async (dispatch: Dispatch<EditRawMaterialsActions>) => {
        // fetch get
        const fetchResult = [{ name: 'asd222asd', id: 7 }]
        dispatch({ type: editRawMaterialsActionsTypes.GET, payload: fetchResult });
    };
};