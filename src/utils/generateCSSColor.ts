import { CSSProperties } from 'react';
import { rgb } from '../types/optionsTypes';


export function generateCSSColor({red,green,blue}:rgb) {
  return `rgb(${red} ${green} ${blue})`;
}