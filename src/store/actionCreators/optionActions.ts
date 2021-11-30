import { defaultT, IOptionStateType } from './../../types/optionsTypes';
import { Dispatch } from 'redux';
import { OptionsActions, OptionsActionTypes } from '../../types/optionsTypes';


export const setGeneralBackGround = (red:number,green:number, blue:number)=>{
  return async (dispatch:Dispatch<OptionsActions>)=>{
    dispatch({
      type:OptionsActionTypes.SET_GENERAL_BACKGROUND,
      payload:{red, green, blue}
    });
  };
};
export const setNextBackGround = (red:number,green:number, blue:number)=>{
  return async (dispatch:Dispatch<OptionsActions>)=>{
    dispatch({
      type:OptionsActionTypes.SET_NEXT_BACKGROUND,
      payload:{red, green, blue}
    });
  };
};
export const setBackBackGround = (red:number,green:number, blue:number)=>{
  return async (dispatch:Dispatch<OptionsActions>)=>{
    dispatch({
      type:OptionsActionTypes.SET_BACK_BACKGROUND,
      payload:{red, green, blue}
    });
  };
};
export const setHeaderBackGround = (red:number,green:number, blue:number)=>{
  return async (dispatch:Dispatch<OptionsActions>)=>{
    dispatch({
      type:OptionsActionTypes.SET_HEADER_BACKGROUND,
      payload:{red, green, blue}
    });
  };
};
export const setFooterBackGround = (red:number,green:number, blue:number)=>{
  return async (dispatch:Dispatch<OptionsActions>)=>{
    dispatch({
      type:OptionsActionTypes.SET_FOOTER_BACKGROUND,
      payload:{red, green, blue}
    });
  };
};
export const setBigBtnBackGround = (red:number,green:number, blue:number)=>{
  return async (dispatch:Dispatch<OptionsActions>)=>{
    dispatch({
      type:OptionsActionTypes.SET_BIG_BUTTON_BACKGROUND,
      payload:{red, green, blue}
    });
  };
};
export const installColorBack = (red:number,green:number, blue:number)=>{
  return async (dispatch:Dispatch<OptionsActions>)=>{
    dispatch({
      type:OptionsActionTypes.COLOR_BACK,
      payload:{red, green, blue}
    });
  };
};
export const installColorNext = (red:number,green:number, blue:number)=>{
  return async (dispatch:Dispatch<OptionsActions>)=>{
    dispatch({
      type:OptionsActionTypes.COLOR_NEXT,
      payload:{red, green, blue}
    });
  };
};
export const installColorBigBtn = (red:number,green:number, blue:number)=>{
  return async (dispatch:Dispatch<OptionsActions>)=>{
    dispatch({
      type:OptionsActionTypes.COLOR_BIG_BUTTON,
      payload:{red, green, blue}
    });
  };
};
export const installColorGeneral = (red:number,green:number, blue:number)=>{
  return async (dispatch:Dispatch<OptionsActions>)=>{
    dispatch({
      type:OptionsActionTypes.COLOR_GENERAL,
      payload:{red, green, blue}
    });
  };
};
export const setLightTheme = ()=>{
  return async (dispatch:Dispatch<OptionsActions>)=>{
    dispatch({
      type:OptionsActionTypes.SET_LIGHT_THEME,
    });
  };
};
export const setDarkTheme = ()=>{
  return async (dispatch:Dispatch<OptionsActions>)=>{
    dispatch({
      type:OptionsActionTypes.SET_DARK_THEME,
    });
  };
};
export const setDefault = ()=>{
  return async (dispatch:Dispatch<OptionsActions>)=>{
    dispatch({
      type:OptionsActionTypes.SET_DEFAULT,
    });
  };
};
export const setAllStyleFromLocStor = (optionsData:defaultT)=>{
  return async (dispatch:Dispatch<OptionsActions>)=>{
    dispatch({
      type:OptionsActionTypes.SET_ALL,
      payload:optionsData
    });
  };
};