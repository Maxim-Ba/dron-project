import { Dispatch } from 'redux';
import { ClientActionTypes , ClientAction} from './../../types/clientsTypes';



// export const fetchClientAction = (dispatch: Dispatch <ClientAction>, isFetching:boolean) =>{
//   return  dispatch({type:ClientActionTypes.FETCH_CLIENTS, payload:isFetching});
// };

export const fetchClientAction = () =>{
    return async (dispatch:Dispatch<ClientAction>)=>{
      try {
        dispatch({type:ClientActionTypes.FETCH_CLIENTS, payload:true});
      } catch (error) {
        dispatch({type:ClientActionTypes.SET_ERROR,payload:''});

      }
    };
  };