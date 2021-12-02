import { check401Err } from './../utils/check401Err';


class UserAPI{
  baseURL: string;
  constructor(){
    this.baseURL = 'http://localhost:8000/api/user';
  }

  async login(eMail:string, password:string) {
    try {
      const response = await fetch(this.baseURL + '/login', {
        method:'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({email:eMail, password})
      });
      const data = await response.json();
      console.log(data, '/login');
      const {id, email, role, token} = data;
      console.log(id);

      localStorage.setItem('token', token);
      return {id, email, role};
    } catch (error) {
      console.log(error);
    }
    
  }

  async auth() {
    try {
      const response = await fetch(this.baseURL + '/auth', {
        method:'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
      });
      check401Err(response);
      const data = await response.json();
      const {id, email, role} = data;
      console.log(data, '/auth');
      return {id,email, role};
    } catch (error) {
      console.log(error);
      localStorage.removeItem('token');
    }
  }

  async registration (email:string, password:string) {
    try {
      const response = await fetch(this.baseURL + '/registration', {
        method:'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({email, password})
      });
      const data = await response.json();
      if (data.result) {
        alert("Пользователь создан");
      }
      else{
        alert(data.error);
      }
    } catch (error) {
      console.log(error, "--error AUTH--");
    }
  };

}

export default new UserAPI();