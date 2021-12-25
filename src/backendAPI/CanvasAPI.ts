import { APIpath } from "../utils/APIpath";


class CanvasAPI {
  baseURL: string;
  constructor(){
    this.baseURL = APIpath + '/graph';
  }
  async clientsData(clientId:number) {
    try {
      const response = await fetch(this.baseURL + `/${clientId}`, {
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
      console.log(error, 'CanvasAPI');
    }
  }
  async getAll() {
    try {
      const response = await fetch(this.baseURL , {
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
      console.log(error, 'CanvasAPI');
    }
  }
}
export default  new CanvasAPI();