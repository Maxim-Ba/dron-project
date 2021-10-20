export interface IDatacolumn {
  name:string,
  sum:number,
  orders:IOrder[]
}

export interface IOrder {
  date:string | DateConstructor,
  rawMaterial:string,
  amount:number,
  price:number
}