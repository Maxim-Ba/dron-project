

class PriceAPI{
  baseURL: string;
  constructor(){
    this.baseURL = 'http://localhost:8000/api/price';
  }

  

  async getPrices() {
    try {
      const response = await fetch(this.baseURL, {
        method:'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
      });
      const data = await response.json();
      console.log(data, 'g ps')
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async getPrice() {
    try {
      const response = await fetch(this.baseURL, {
        method:'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
      });
      const data = await response.json();
      console.log(data, 'g p')
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
      console.log(data, 'g p n')
      const result = data.map((item: { id_price_name: any; price_name: any; })=>({
        nameId:item.id_price_name,
        name:item.price_name,
      }));
      return result;
    } catch (error) {
      console.log(error);
    }
  }


  // async registration (email:string, password:string) {
  //   try {
  //     const response = await fetch(this.baseURL + '/registration', {
  //       method:'POST',
  //       headers: {
  //         'Content-Type': 'application/json;charset=utf-8'
  //       },
  //       body: JSON.stringify({email, password})
  //     });
  //     const data = await response.json();
  //     if (data.result) {
  //       alert("Пользователь создан");
  //     }
  //     else{
  //       alert(data.error);
  //     }
  //   } catch (error) {
  //     console.log(error, "--error AUTH--");
  //   }
  // };

}

export default new PriceAPI();