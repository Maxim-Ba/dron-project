import { Input, Form, Select } from "antd";
import React, { FunctionComponent, useEffect } from "react";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

interface FormAddMaterialProps {

}
export const adapterForUnitName = (unitId:number) =>{
  switch (unitId) {
    case 1:
      
      return 'кг';
      case 2:
      
        return 'шт';
    default:
      break;
  }
};
const FormAddMaterial: FunctionComponent<FormAddMaterialProps> = () => {
  const { setMaterialName, setMaterialUnit } = useActions();
  const { name, units: unit } = useTypedSelector(state => state.rawMaterials.creationFields);
  const { units } = useTypedSelector(state => state.rawMaterials);

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaterialName(e.target.value);
  };

  const handleChangeUnit = (value: any) => {
    console.log(value);
    setMaterialUnit(value);
  };
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({ name, units:unit });
  }, [name, unit]);




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

export default FormAddMaterial;