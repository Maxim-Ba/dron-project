import { Input, Form } from "antd";
import React, { FunctionComponent, useEffect, useState } from "react";
import { useStore } from "react-redux";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

interface FormChangeClientProps {

}
interface FieldData {
  name: string | number | (string | number)[];
  value?: any;
  touched?: boolean;
  validating?: boolean;
  errors?: string[];
}

const FormChangeClient: FunctionComponent<FormChangeClientProps> = () => {
  const {setClientNamesForChange, setClientINNForChange, setClientPhoneForChange} = useActions();
  const {name, inn, phone, id} = useTypedSelector(state=>state.clients.selectedClientsFields);


  const handleChangeName =(e:React.ChangeEvent<HTMLInputElement>)=>{
    setClientNamesForChange(e.target.value);
  };
  const handleChangeINN =(e:React.ChangeEvent<HTMLInputElement>)=>{
    setClientINNForChange(Number.parseInt(e.target.value));
  };
  const handleChangePhone =(e:React.ChangeEvent<HTMLInputElement>)=>{
    setClientPhoneForChange(Number.parseInt(e.target.value));
  };
  const [form] = Form.useForm();

  useEffect(()=>{
    form.setFieldsValue({name, inn, phone});
    },[name, inn, phone]);

  return (

    <Form
      form={form}
    >
      <Form.Item name="name" label="Название" rules={[{ required: true }]}>
        <Input 
          onChange={(e)=>handleChangeName(e)}

        />
      </Form.Item>
      <Form.Item name="inn" label="ИНН">
        <Input 
          type='number' 
          onChange={(e)=>handleChangeINN(e)}
          
        />
      </Form.Item>
      <Form.Item name="phone" label="Телефон">
        <Input 
          type='number' // phone type
          onChange={(e)=>handleChangePhone(e)}
          value={phone?.toString() }  
        />
      </Form.Item>
    
    </Form>
  );
};

export default FormChangeClient;