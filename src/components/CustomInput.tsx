import { Space, Input } from 'antd';
import React, { FunctionComponent, useEffect } from 'react';
import { useActions } from '../hooks/useActions';

interface CustomInputProps {
  amount: number,
  index: number,
}



const CustomInput: FunctionComponent<CustomInputProps> = ({ amount, index }: CustomInputProps) => {

  useEffect(()=>{
    return ()=>{
      amount = 0;
    };
  },[]);
  const { setRawMaterialAmountOC } = useActions();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const amountToNumber = Number.parseInt(e.target.value);
    setRawMaterialAmountOC( amountToNumber, index);
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