import { Input, Form } from "antd";
import React, { FunctionComponent, useEffect } from "react";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

interface FormAddPriceProps {

}

const FormAddPrice: FunctionComponent<FormAddPriceProps> = () => {
  const {setNameForCreation} = useActions();
  const {fieldForCreationPrice} = useTypedSelector(state=>state.price);

  const handleChangeName =(e:React.ChangeEvent<HTMLInputElement>)=>{
    setNameForCreation(e.target.value);
  };

  const [form] = Form.useForm();

  useEffect(()=>{
    form.setFieldsValue({name: fieldForCreationPrice});
    },[fieldForCreationPrice]);

  return (

    <Form form={form}>
      <Form.Item name="name" label="Название прайса" rules={[{ required: true }]}>
        <Input 
          onChange={(e)=>handleChangeName(e)}

        />
        </Form.Item>
    </Form>
  );
};

export default FormAddPrice;