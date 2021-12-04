import { APIpath } from "../utils/APIpath";

class ClientsAPI{
  baseURL: string;
  constructor(){
    this.baseURL = APIpath + '/clients';
  }

  

  async getClients() {
    try {
      const response = await fetch(this.baseURL, {
        method:'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
      });
      if (response.status === 401) {
        return 401;
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error, 'clients');
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
      if (response.status === 401) {
        return 401;
      }
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
      if (response.status === 401) {
        return 401;
      }
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
      if (response.status === 401) {
        return 401;
      }
      const data = await response.json();
      console.log(data, '/');
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new ClientsAPI();