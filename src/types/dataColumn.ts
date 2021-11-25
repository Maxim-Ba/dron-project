export interface IDatacolumn {
  name:string,
  sum:number,
  orders:IOrder[]
}
export interface IMaterialList {
  rawMaterial:string,
  amount:number,
  units:string,
  priceByOne:number
  price:number

}
export interface IOrder {
  orderId:number | null,
  date:string | DateConstructor,
  materialList:IMaterialList[],
  price:number
}