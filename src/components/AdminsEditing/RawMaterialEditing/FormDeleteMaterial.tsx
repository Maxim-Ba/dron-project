import { Input, Form } from "antd";
import { FunctionComponent, useEffect } from "react";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

interface FormDeleteMaterialProps {

}

const FormDeleteMaterial: FunctionComponent<FormDeleteMaterialProps> = () => {
  const { readyForDeleteMaterial } = useActions();
  const [form] = Form.useForm();
  const {visible} = useTypedSelector(state=>state.modalWindow);

  useEffect(() => {
    return ()=> {
      form.setFieldsValue({ delete: '' });
      readyForDeleteMaterial(false);
  };
  }, [visible]);



  return (

    <Form form={form}>
      <Form.Item name="delete" label="Введите УДАЛИТЬ" rules={[
        {
          validator: (_, value) => {
            if (value === 'УДАЛИТЬ') {

              readyForDeleteMaterial(true);
              return Promise.resolve();
            }
            readyForDeleteMaterial(false);
            return Promise.reject(new Error('должно быть написано "УДАЛИТЬ"'));
          }
          , message: 'должно быть написано "УДАЛИТЬ"'
        }
      ]}>
        <Input />
      </Form.Item>


    </Form>
  );
};

export default FormDeleteMaterial;