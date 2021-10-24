import { Space, Input } from 'antd';
import React, { FunctionComponent } from 'react';
import { useActions } from '../hooks/useActions';

interface CustomInputProps {
  amount: number,
  index: number,
  name: string
}



const CustomInput: FunctionComponent<CustomInputProps> = ({ amount, index, name }: CustomInputProps) => {

  const { setRawMaterial } = useActions();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const amountToNumber = Number.parseInt(e.target.value);
    setRawMaterial(name, amountToNumber, index);
  };

  return (
    <Space direction="vertical">
      <Input
        onChange={e => handleChange(e)}
        className="custom-input"
        addonAfter="кг"
        type="number" min="0"
        value={amount}
      />
    </Space>
  );
};

export default CustomInput;