import { ICreateOrderAPI } from "../types/orderCreationTypes";


class OrderAPI{
  baseURL: string;
  constructor(){
    this.baseURL = 'http://localhost:8000/api/orders';
  }

  
  async getOrders() {
    try {
      const response = await fetch(this.baseURL , {
        method:'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
      });
      const data = await response.json();
      const result = data.map((item: { id_price_name: any; price_name: any; })=>({
        nameId:item.id_price_name,
        name:item.price_name,
      }));
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  createOrderAdapter(data:any):ICreateOrderAPI{
    return({
      client:data.client,
      price:data.price,
      date:data.date,
      rawMaterialList:data.rawMaterialList,
    } );
  }

  async createOrder(orderData:ICreateOrderAPI) {
    try {
      const response = await fetch(this.baseURL , {
        method:'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(orderData)
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }



}

export default new OrderAPI();