export interface IUserStateType {
  id: number | null,
  email: string,
  isFetching: boolean,
  role:string
}

export enum userActionTypes {
  SET_USER='SET_USER',
  IS_FETCHING='IS_FETCHING',
  LOGOUT='LOGOUT',
}

interface ISetUser {
  type: userActionTypes.SET_USER,
  payload: {
    id:number,
    email:string
    role:string
  }
}

interface IIsFetching {
  type: userActionTypes.IS_FETCHING,
  payload:boolean
}

interface ILogout {
  type: userActionTypes.LOGOUT,
}

export type UserAction = 
ISetUser 
| IIsFetching
| ILogout