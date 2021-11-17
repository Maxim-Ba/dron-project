import { IUserStateType, UserAction, userActionTypes } from "../../types/userTypes";

const initialState: IUserStateType = {
  email: '',
  id: null,
  role:'',
  isFetching: false
};

export const userReducer = (state:IUserStateType = initialState, action:UserAction):IUserStateType=>{
  switch (action.type) {
    case userActionTypes.IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload
      };
      case userActionTypes.SET_USER:
        return {
          ...state,
            isFetching: false,
            id: action.payload.id,
            email: action.payload.email,
            role: action.payload.role
        };
        case userActionTypes.LOGOUT:
          localStorage.removeItem('token');
          return {
            ...state,
              email: '',
              id: null,
              role:''
          };
    default: 
      return state;
  }
};