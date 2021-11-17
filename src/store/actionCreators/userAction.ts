import { Dispatch } from 'redux';
import { UserAction, userActionTypes } from '../../types/userTypes';


export const setIsFetching = (flag:boolean)=>{
  return async (dispatch:Dispatch<UserAction>) =>{
    dispatch({
      type:userActionTypes.IS_FETCHING,
      payload: flag
    });
  };
};

export const setUser = (id:number, email:string, role:string)=>{
  return async (dispatch:Dispatch<UserAction>) =>{
    dispatch({
      type: userActionTypes.SET_USER,
      payload: {
        email,
        id,
        role
      }
    });
  };
};

export const logout = ()=>{
  return async (dispatch:Dispatch<UserAction>) =>{
    dispatch({
      type: userActionTypes.LOGOUT,
    });
  };
};