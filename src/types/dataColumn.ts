export interface IDatacolumn {
  name:string,
  sum:number,
  orders:IOrder[]
}
export interface IMaterialList {
  rawMaterialId:number,
  rawMaterial:string,
  amount:number,
  units:number,
  priceByOne:number
  price:number

}
export interface IOrder {
  orderId:number | null,
  date:string | DateConstructor,
  materialList:IMaterialList[],
  price:number
}