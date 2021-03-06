import moment from "moment";
import { ICreateOrderAPI, IEditOrderAPI } from "../types/orderCreationTypes";
import { APIpath } from "../utils/APIpath";



class OrderAPI {
  baseURL: string;

  constructor() {
    this.baseURL = APIpath + "/orders";
  }

  async getOrdersByClient(
    clientId: number,
    dateStart: string | Date | null,
    dateEnd: string | Date | null
  ) {
    try {
      dateStart =
        dateStart && moment(dateStart, "YYYY-MM-DD").toISOString().slice(0, 10);
      dateEnd =
        dateEnd && moment(dateEnd, "YYYY-MM-DD").toISOString().slice(0, 10);
      const response = await fetch(
        this.baseURL + `/client/${clientId}/${dateStart}/${dateEnd}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.status === 401) {
        return 401;
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  
  async getOrders(
    dateStart: string | Date | null,
    dateEnd: string | Date | null
  ) {
    try {
      dateStart =
        dateStart && moment(dateStart, "YYYY-MM-DD").toISOString().slice(0, 10);
      dateEnd =
        dateEnd && moment(dateEnd, "YYYY-MM-DD").toISOString().slice(0, 10);
      const response = await fetch(
        this.baseURL + `/all-orders/${dateStart}/${dateEnd}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.status === 401) {
        return 401;
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  createOrderAdapter(data: any): ICreateOrderAPI {
    return {
      client: data.client,
      price: data.price,
      date: data.date,
      rawMaterialList: data.rawMaterialList,
    };
  }

  async createOrder(orderData: ICreateOrderAPI) {
    try {
      const response = await fetch(this.baseURL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(orderData),
      });
      if (response.status === 401) {
        return 401;
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async editOrder(orderData: IEditOrderAPI) {
    try {
      const response = await fetch(this.baseURL, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(orderData),
      });
      if (response.status === 401) {
        return 401;
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async getExelFile(tableData:any) {
    try {
      const response = await fetch(this.baseURL +'/createExele', {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({orderData: tableData}),
      });
      if (response.status === 401) {
        return 401;
      }
      if (response.status === 200) {
        const blob = await response.blob();
        const downloadUrl = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = 'export.xlsx';
        document.body.appendChild(link);
        link.click();
        link.remove();
    }
    } catch (error) {
      alert(error);
      console.log(error);
    }
  }
}

export default new OrderAPI();
