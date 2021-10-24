import { lime, grey } from '@ant-design/colors';
import { CSSProperties } from 'react';
import { ICustomStyleButton } from '../types/buttonTypes';
export const styleVariables:CSSProperties = {
  paddingTop: 64
};

export const navLinkStyle:CSSProperties={
  width: '50%'
};

export const customStyleButton: ICustomStyleButton = {
  type: 'primary',
  block: true,
  shape: 'round',
  style: {
    border: 'none',
    margin: undefined,
    

  },
};
export const blackText:CSSProperties ={
  color: 'black'
} ;
// ------colors-------
export const gray:CSSProperties ={
  backgroundColor: grey[0]
} ;
export const limeColor:CSSProperties ={
  backgroundColor: lime[7]
} ;
export const whiteColor:CSSProperties ={
  backgroundColor: 'white'
} ;
export const redColor:CSSProperties ={
  backgroundColor: 'red'
} ;