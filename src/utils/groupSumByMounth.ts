import { CanvasPoint } from './../types/CanvasGraphTypes';
export const groupSumByMounth = (data: CanvasPoint[] | [])=>{
  
  if (!data.length) {
    return data;
  }
  const obj:any ={};
  for (const [x,y] of data) {
    if (obj[x]) {
      obj[x] = obj[x] + y;
    }
    obj[x] = y;
  }

  const result = [];
  for (let prop in obj) {
    result.push([parseInt(prop), obj[prop]]);
  }

  return result;
};