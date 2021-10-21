import { Space, Input } from 'antd';
import { FunctionComponent } from 'react';

interface CustomInputProps {

}



const CustomInput: FunctionComponent<CustomInputProps> = () => {
  return (
    <Space direction="vertical">
      <Input className="custom-input" addonAfter="кг" defaultValue="mysite" type="number" min="0" />
    </Space>
  );
};

export default CustomInput;