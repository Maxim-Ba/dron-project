export type rgb = {red:number,green:number, blue:number}

export type defaultT = {
  generalBackground: rgb
  backBackgroundBack:rgb
  backBackgroundNext:rgb
  backBackgroundHeader:rgb
  backBackgroundFooter:rgb
  backBackgroundBigBtn:rgb
  generalColor:rgb
  btnColorBack:rgb
  btnColorNext:rgb
  btnColorBig:rgb
  isSelected?:boolean
}
export interface IOptionStateType{
  generalBackground: rgb
  backBackgroundBack:rgb
  backBackgroundNext:rgb
  backBackgroundHeader:rgb
  backBackgroundFooter:rgb
  backBackgroundBigBtn:rgb
  generalColor:rgb
  btnColorBack:rgb
  btnColorNext:rgb
  btnColorBig:rgb
  lightTheme:defaultT
  darkTheme:defaultT
  default:defaultT
}

export enum OptionsActionTypes {
  SET_GENERAL_BACKGROUND="SET_GENERAL_BACKGROUND",
  SET_BACK_BACKGROUND="SET_BACK_BACKGROUND",
  SET_NEXT_BACKGROUND="SET_NEXT_BACKGROUND",
  SET_HEADER_BACKGROUND="SET_HEADER_BACKGROUND",
  SET_FOOTER_BACKGROUND="SET_FOOTER_BACKGROUND",
  SET_BIG_BUTTON_BACKGROUND="SET_BIG_BUTTON_BACKGROUND",
  SET_LIGHT_THEME="SET_LIGHT_THEME",
  SET_DARK_THEME="SET_DARK_THEME",
  SET_DEFAULT="SET_DEFAULT",
  COLOR_GENERAL="COLOR_GENERAL",
  COLOR_BIG_BUTTON="COLOR_BIG_BUTTON",
  COLOR_BACK="COLOR_BACK",
  COLOR_NEXT="COLOR_NEXT",
  SET_ALL="SET_ALL"

}

interface setGeneralBackGround {
  type:OptionsActionTypes.SET_GENERAL_BACKGROUND
  payload:rgb
}
interface setNextBackGround {
  type:OptionsActionTypes.SET_NEXT_BACKGROUND
  payload:rgb
}
interface setBackBackGround {
  type:OptionsActionTypes.SET_BACK_BACKGROUND
  payload:rgb
}
interface setHeaderBackGround {
  type:OptionsActionTypes.SET_HEADER_BACKGROUND
  payload:rgb
}
interface setFooterBackGround {
  type:OptionsActionTypes.SET_FOOTER_BACKGROUND
  payload:rgb
}
interface setBigBtnBackGround {
  type:OptionsActionTypes.SET_BIG_BUTTON_BACKGROUND
  payload:rgb
}
interface installColorBack {
  type:OptionsActionTypes.COLOR_BACK
  payload:rgb
}
interface installColorNext {
  type:OptionsActionTypes.COLOR_NEXT
  payload:rgb
}
interface installColorBigBtn {
  type:OptionsActionTypes.COLOR_BIG_BUTTON
  payload:rgb
}
interface installColorGeneral {
  type:OptionsActionTypes.COLOR_GENERAL
  payload:rgb
}
interface setLightTheme {
  type:OptionsActionTypes.SET_LIGHT_THEME
}
interface setDarkTheme {
  type:OptionsActionTypes.SET_DARK_THEME
}
interface setDefault {
  type:OptionsActionTypes.SET_DEFAULT
}
interface setAllStyleFromLocStor {
  type:OptionsActionTypes.SET_ALL,
  payload:defaultT
}
export type OptionsActions = 
  setGeneralBackGround
  | setNextBackGround
  | setBackBackGround
  | setHeaderBackGround
  | setFooterBackGround
  | setBigBtnBackGround
  | setNextBackGround
  | setLightTheme
  | setDarkTheme
  | setDefault
  | installColorBack
  | installColorNext
  | installColorBigBtn
  | installColorGeneral
  | setAllStyleFromLocStor