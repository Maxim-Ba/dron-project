import { PriceType } from "../types/priceTypes";


class PriceAPI{
  baseURL: string;
  constructor(){
    this.baseURL = 'http://localhost:8000/api/price';
  }

  

  async getPrice(priceName:string) {
    try {
      const response = await fetch(this.baseURL + `/${priceName}`, {
        method:'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
      });
      const data = await response.json();
      console.log(data);
      const priceList = data.map((itemPrice: { id_price: number; coast: number |null; raw_material_id: number; name: string; }):PriceType=>{
        return {
          id:itemPrice.id_price,
          coast:itemPrice.coast,
          rawMaterialId: itemPrice.raw_material_id,
          name:itemPrice.name,
        };
      });
      return priceList;
    } catch (error) {
      console.log(error);
    }
  }

  async getRawMaterialsByPriceName() {
    try {
      const response = await fetch(this.baseURL, {
        method:'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async getPriceNames() {
    try {
      const response = await fetch(this.baseURL + '/price-names', {
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

  async createPrice(name:string) {
    try {
      const response = await fetch(this.baseURL + '/price-names', {
        method:'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({name})

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

  async changePrice(array:Array<{coast:number, id:number}>) {
    try {
      const response = await fetch(this.baseURL , {
        method:'PUT',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(array)

      });
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async deletePriceName(id:number) {
    try {
      const response = await fetch(this.baseURL +`/${id}` , {
        method:'DELETE',
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

}

export default new PriceAPI();