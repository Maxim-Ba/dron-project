

class RawMaterialAPI{
  baseURL: string;
  constructor(){
    this.baseURL = 'http://localhost:8000/api/raw-materials';
  }

  

  async getRawMaterials() {
    try {
      const response = await fetch(this.baseURL, {
        method:'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
      });
      const data = await response.json();
      console.log(data, 'g materials')
      const rawMaterials = data.map((material: { name: any; raw_maretial_id: any; })=>({
        name:material.name, 
        id:material.raw_maretial_id
      }));
      
      return rawMaterials;
    } catch (error) {
      console.log(error);
    }
  }

  async getRawMaterial() {
    try {
      const response = await fetch(this.baseURL, {
        method:'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
      });
      const data = await response.json();
      console.log(data, 'g material')
      return data;
    } catch (error) {
      console.log(error);
    }
  }

}

export default new RawMaterialAPI();