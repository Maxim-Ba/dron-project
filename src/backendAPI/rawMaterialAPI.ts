import { rawMaterial } from "../types/editRawMaterialsTypes";

class RawMaterialAPI{
  baseURL: string;
  constructor(){
    this.baseURL = 'http://localhost:8000/api/raw-materials';
  }

  async createRawMaterials(nameMaterial:string, units:string) {
    try {
      const response = await fetch(this.baseURL, {
        method:'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json;charset=utf-8'

        },
        body: JSON.stringify({nameMaterial, units})
      });
      if (response.status === 401) {
        return 401;
      }
      const data = await response.json();
      if (data.name === "error") {
        return data;
      }
      const rawMaterials = data.map((material: { name: any; raw_material_id: any; unit_name:string;})=>({
        name:material.name, 
        id:material.raw_material_id,
        units: material.unit_name
      }));
      
      return rawMaterials;
    } catch (error) {
      console.log(error);
    }
  }

  async changeRawMaterials(valuesForChange:rawMaterial) {
    try {
      const response = await fetch(this.baseURL, {
        method:'PUT',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json;charset=utf-8'

        },
        body: JSON.stringify({...valuesForChange})
      });
      if (response.status === 401) {
        return 401;
      }
      const data = await response.json();
      if (data.name === "error") {
        return data;
      }
      const rawMaterials = data.map((material: { name: any; raw_material_id: any; unit_name:string;})=>({
        name:material.name, 
        id:material.raw_material_id,
        units: material.unit_name
      }));
      
      return rawMaterials;
    } catch (error) {
      console.log(error);
    }
  }


  async getRawMaterials() {
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
      const rawMaterials = data.map((material: { name: any; raw_material_id: any; unit_name:string;})=>({
        name:material.name, 
        id:material.raw_material_id,
        units: material.unit_name
      }));
      
      return rawMaterials;
    } catch (error) {
      console.log(error);
    }
  }

  async deleteRawMaterials(id : number) {
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
      const rawMaterials = data.map((material: { name: any; raw_material_id: any; unit_name:string;})=>({
        name:material.name, 
        id:material.raw_material_id,
        units: material.unit_name
      }));
      
      return rawMaterials;
    } catch (error) {
      console.log(error);
    }
  }

  async getRawMaterialsAndUnits() {
    try {
      const response = await fetch(this.baseURL + '/materials-and-units', {
        method:'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
      });
      if (response.status === 401) {
        return 401;
      }
      const data = await response.json();

      const units = data.units.map((unit: { unit_name: any; id_unit_name: any; })=>({
        name:unit.unit_name, 
        id:unit.id_unit_name
      }));

      const rawMaterials = data.rawMaterials.map((material: {unit_name:string; name: string; raw_material_id: number; })=>({
        name:material.name, 
        id:material.raw_material_id,
        units:material.unit_name
      }));
      
      return {rawMaterials, units};
    } catch (error) {
      console.log(error);
    }
  }


}

export default new RawMaterialAPI();