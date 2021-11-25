export function checkAllvaluesIsNotNull(array:Array<{coast:number, id:number}> | null):boolean {
  if (!array) {
    return false;
  }

  return array.every(item=>item.coast > 0);

}