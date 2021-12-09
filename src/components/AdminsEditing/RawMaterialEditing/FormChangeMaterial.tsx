import { Input, Form, Select } from "antd";
import React, { FunctionComponent, useEffect } from "react";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { rawMaterial } from "../../../types/editRawMaterialsTypes";
import { adapterForUnitName } from "./FormAddMaterial";

interface FormChangeMaterialProps {

}


const FormChangeMaterial: FunctionComponent<FormChangeMaterialProps> = () => {
  // const { setMaterialName, setMaterialUnit } = useActions();
  const { materialSelected, units,rawMaterialsList } = useTypedSelector(state => state.rawMaterials);
  const {setChanges} = useActions(); 
  const initFormValue = rawMaterialsList.find((material)=>material.id ===materialSelected);
  const [form] = Form.useForm();


  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChanges({...initFormValue as rawMaterial, name:form.getFieldValue("name") ,units:form.getFieldValue('units') });
  };

  const handleChangeUnit = (value: any) => {
    setChanges({...initFormValue as rawMaterial, name:form.getFieldValue("name") ,units:value});
  };

  useEffect(() => {
    form.setFieldsValue({ name:initFormValue?.name, units:initFormValue?.units });
  }, [materialSelected]);



    const options = units.map((unit) => {
      return (<Select.Option key={unit.id} value={unit.name}>{adapterForUnitName(unit.id)}</Select.Option>);
    });
  
  return (

    <Form form={form}>
      <Form.Item name="name" label="Название" rules={[{ required: true, message: 'Поле должно быть заполнено' }]}>
        <Input
          onChange={(e) => handleChangeName(e)}

        />
      </Form.Item>
      <Form.Item name="units" label="Единицы" rules={[{ required: true, message: 'Поле должно быть заполнено' }]}>
        <Select
          onChange={(value) => handleChangeUnit(value)}
        >
          {options}
        </Select>
      </Form.Item>


    </Form>
  );
};

export default FormChangeMaterial;