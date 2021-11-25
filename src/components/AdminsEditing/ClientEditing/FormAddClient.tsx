import { Input, Form } from "antd";
import React, { FunctionComponent, useEffect } from "react";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

interface FormAddClientProps {

}

const FormAddClient: FunctionComponent<FormAddClientProps> = () => {
  const {setClientNames, setClientINN, setClientPhone} = useActions();
  const {name, inn, phone} = useTypedSelector(state=>state.clients.formFields);

  const handleChangeName =(e:React.ChangeEvent<HTMLInputElement>)=>{
    setClientNames(e.target.value);
  };
  const handleChangeINN =(e:React.ChangeEvent<HTMLInputElement>)=>{
    setClientINN(Number.parseInt(e.target.value));
  };
  const handleChangePhone =(e:React.ChangeEvent<HTMLInputElement>)=>{
    setClientPhone(Number.parseInt(e.target.value));
  };
  const [form] = Form.useForm();

  useEffect(()=>{
    form.setFieldsValue({name, inn, phone});
    },[name, inn, phone]);

  return (

    <Form form={form}>
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
        />
      </Form.Item>
    
    </Form>
  );
};

export default FormAddClient;