import { OptionsActions, OptionsActionTypes } from "./../../types/optionsTypes";
import { IOptionStateType } from "../../types/optionsTypes";

const initialState: IOptionStateType = {
  generalBackground: {
    blue: 234,
    red: 23,
    green: 234,
  },
  backBackgroundBack: {
    blue: 255,
    red: 255,
    green: 255,
  },
  backBackgroundBigBtn: {
    blue: 0,
    red: 91,
    green: 140,
  },
  backBackgroundFooter: {
    blue: 234,
    red: 23,
    green: 234,
  },
  backBackgroundHeader: {
    blue: 41,
    red: 0,
    green: 21,
  },
  backBackgroundNext: {
    blue: 255,
    red: 24,
    green: 144,
  },
  btnColorBack: {
    blue: 0,
    red: 0,
    green: 0,
  },
  btnColorBig: {
    blue: 255,
    red: 255,
    green: 255,
  },
  btnColorNext: {
    blue: 255,
    red: 255,
    green: 255,
  },
  generalColor: {
    blue: 0,
    red: 0,
    green: 0,
  },
  darkTheme: {
    generalBackground: {
      blue: 234,
      red: 23,
      green: 234,
    },
    backBackgroundBack: {
      blue: 234,
      red: 23,
      green: 234,
    },
    backBackgroundBigBtn: {
      blue: 234,
      red: 23,
      green: 234,
    },
    backBackgroundFooter: {
      blue: 234,
      red: 23,
      green: 234,
    },
    backBackgroundHeader: {
      blue: 234,
      red: 23,
      green: 234,
    },
    backBackgroundNext: {
      blue: 234,
      red: 23,
      green: 234,
    },
    btnColorBack: {
      blue: 0,
      red: 0,
      green: 0,
    },
    btnColorBig: {
      blue: 255,
      red: 255,
      green: 255,
    },
    btnColorNext: {
      blue: 0,
      red: 0,
      green: 0,
    },
    generalColor: {
      blue: 255,
      red: 255,
      green: 255,
    },
    isSelected: false,
  },
  lightTheme: {
    generalBackground: {
      blue: 255,
      red: 255,
      green: 255,
    },
    backBackgroundBack: {
      blue: 207,
      red: 207,
      green: 207,
    },
    backBackgroundBigBtn: {
      blue: 234,
      red: 200,
      green: 234,
    },
    backBackgroundFooter: {
      blue: 255,
      red: 255,
      green: 255,
    },
    backBackgroundHeader: {
      blue: 207,
      red: 207,
      green: 207,
    },
    backBackgroundNext: {
      blue: 234,
      red: 23,
      green: 234,
    },
    btnColorBack: {
      blue: 0,
      red: 0,
      green: 0,
    },
    btnColorBig: {
      blue: 0,
      red: 0,
      green: 0,
    },
    btnColorNext: {
      blue: 0,
      red: 0,
      green: 0,
    },
    generalColor: {
      blue: 0,
      red: 0,
      green: 0,
    },
    isSelected: false,
  },
  default: {
    generalBackground: {
      blue: 166,
      red: 166,
      green: 166,
    },
    backBackgroundBack: {
      blue: 255,
      red: 255,
      green: 255,
    },
    backBackgroundBigBtn: {
      blue: 0,
      red: 91,
      green: 140,
    },
    backBackgroundFooter: {
      blue: 166,
      red: 166,
      green: 166,
    },
    backBackgroundHeader: {
      blue: 41,
      red: 0,
      green: 21,
    },
    backBackgroundNext: {
      blue: 255,
      red: 24,
      green: 144,
    },
    btnColorBack: {
      blue: 0,
      red: 0,
      green: 0,
    },
    btnColorBig: {
      blue: 255,
      red: 255,
      green: 255,
    },
    btnColorNext: {
      blue: 255,
      red: 255,
      green: 255,
    },
    generalColor: {
      blue: 0,
      red: 0,
      green: 0,
    },
    isSelected: true,
  },
};

export const optionReducer = (
  state = initialState,
  action: OptionsActions
): IOptionStateType => {
  switch (action.type) {
    case OptionsActionTypes.COLOR_BACK:
      return {
        ...state,
        btnColorBack: {
          ...action.payload,
        },
      };
    case OptionsActionTypes.COLOR_NEXT:
      return {
        ...state,
        btnColorNext: {
          ...action.payload,
        },
      };
    case OptionsActionTypes.COLOR_GENERAL:
      return {
        ...state,
        generalColor: {
          ...action.payload,
        },
      };
    case OptionsActionTypes.COLOR_BIG_BUTTON:
      return {
        ...state,
        btnColorBig: {
          ...action.payload,
        },
      };
    case OptionsActionTypes.SET_BACK_BACKGROUND:
      return {
        ...state,
        backBackgroundBack: {
          ...action.payload,
        },
      };
    case OptionsActionTypes.SET_BIG_BUTTON_BACKGROUND:
      return {
        ...state,
        backBackgroundBigBtn: {
          ...action.payload,
        },
      };
    case OptionsActionTypes.SET_NEXT_BACKGROUND:
      return {
        ...state,
        backBackgroundNext: {
          ...action.payload,
        },
      };
    case OptionsActionTypes.SET_GENERAL_BACKGROUND:
      return {
        ...state,
        generalBackground: {
          ...action.payload,
        },
      };
    case OptionsActionTypes.SET_HEADER_BACKGROUND:
      return {
        ...state,
        backBackgroundHeader: {
          ...action.payload,
        },
      };
    case OptionsActionTypes.SET_FOOTER_BACKGROUND:
      return {
        ...state,
        backBackgroundFooter: {
          ...action.payload,
        },
      };
    case OptionsActionTypes.SET_DARK_THEME:
      return {
        ...state,
        ...state.darkTheme,
        default: { ...state.default, isSelected: false },
        lightTheme: { ...state.lightTheme, isSelected: false },
        darkTheme: { ...state.darkTheme, isSelected: true },
      };
    case OptionsActionTypes.SET_LIGHT_THEME:
      return {
        ...state,
        ...state.lightTheme,
        default: { ...state.default, isSelected: false },
        lightTheme: { ...state.lightTheme, isSelected: true },
        darkTheme: { ...state.darkTheme, isSelected: false },
      };
    case OptionsActionTypes.SET_DEFAULT:
      return {
        ...state,
        ...state.default,
        default: { ...state.default, isSelected: true },
        lightTheme: { ...state.lightTheme, isSelected: false },
        darkTheme: { ...state.darkTheme, isSelected: false },
      };
    default:
      return state;
  }
};
