export type ClientType = {
    name: string,
    phon: number|string,
    id: number,
    INN: number | null
    extraInformation: string
}
export interface IClientsState {
    clientList:Array<ClientType>
}

export enum clientActionsTypes{
    GET="GET",
    CREATE="CREATE",
    CHANGE="CHANGE",
    DELETE="DELETE"
}

interface getClientssAction {
    type:clientActionsTypes.GET,
    payload:Array<ClientType>
}

interface createClientAction {
    type:clientActionsTypes.CREATE,
    payload:ClientType
}

interface changeClientAction {
    type:clientActionsTypes.CHANGE,
    payload:ClientType
}
interface deleteClientAction {
    type:clientActionsTypes.DELETE,
    payload:{id:number}
}
export type EditClientsActions =  
    getClientssAction
    | createClientAction
    | changeClientAction
    | deleteClientAction