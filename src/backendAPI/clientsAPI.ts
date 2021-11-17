
class ClientsAPI{
  baseURL: string;
  constructor(){
    this.baseURL = 'http://localhost:8000/api/clients';
  }

  

  async getClients() {
    try {
      const response = await fetch(this.baseURL, {
        method:'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
      });
      const data = await response.json();
      console.log(data, '/');
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async createClient (name:string, inn:number | null, phone:number| null) {
    try {
      const response = await fetch(this.baseURL + '/', {
        method:'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({name, inn, phone})
      });
      const data = await response.json();
      console.log(data);
      return data;

    } catch (error) {
      console.log(error, "--error createClient--");
    }
  };


  async editClient (name:string, inn:number | null, phone:number| null, id : number) {
    try {
      console.log(name, inn, phone, id);

      const response = await fetch(this.baseURL + '/', {
        method:'PUT',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({name, inn, phone, id})
      });
      const data = await response.json();
      console.log(data);
      return data;

    } catch (error) {
      console.log(error, "--error editClient--");
    }
  };

  async deleteClients(id:number) {
    try {
      const response = await fetch(this.baseURL + `/${id}`, {
        method:'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },

      });
      const data = await response.json();
      console.log(data, '/');
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new ClientsAPI();