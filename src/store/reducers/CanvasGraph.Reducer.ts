import { CanvasGraphAction, CanvasActionTypes } from './../../types/CanvasGraphTypes';
import { CanvasGraphState } from "../../types/CanvasGraphTypes";

const  initialState: CanvasGraphState = {
  allData: [],
  client: [],
  fetch: false,
  selectedClient:{clientId:0, name:''}

};
export const canvasGraphReducer = (
    state: CanvasGraphState = initialState,
    action: CanvasGraphAction
  ):CanvasGraphState=>{
    switch (action.type) {
      case CanvasActionTypes.GET_CLIENT:
        return {
          ...state,
            client: [...action.payload]
        };    
      case CanvasActionTypes.GET_ALL:
        return {
            ...state,
              allData: [...action.payload]
          };      
      case CanvasActionTypes.FETCH:
        return {
            ...state,
            fetch: action.payload
          };  
      case CanvasActionTypes.SELECT_CLIENT:
        return {
          ...state,
            selectedClient: {...action.payload}
              };  
      default:
        return state;
      }
};