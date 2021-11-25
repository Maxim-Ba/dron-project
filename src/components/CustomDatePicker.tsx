import React, { FunctionComponent, useEffect } from "react";
import { DatePicker } from "antd";
import moment from 'moment';
import 'moment/locale/ru';

import locale from 'antd/es/date-picker/locale/ru_RU';
import { useActions } from "../hooks/useActions";


interface CustomDatePickerProps {
  props: any
}

const CustomDatePicker: FunctionComponent<CustomDatePickerProps> = ({ props }: CustomDatePickerProps) => {

  const { clearDateOrderCreation, setDateOrderCreation } = useActions();


  function onChange(date: moment.Moment | null, dateString: string) {
    console.log(dateString);
    setDateOrderCreation(dateString);
  }
  useEffect(() => {
    return ()=>{
      clearDateOrderCreation();
    } ;
  }, []);
  return (
    <DatePicker 
      // format={'DD/MM/YYYY'}
      onChange={onChange} 
      locale={locale} 
      style={props.width} 
    />
  );
};

export default CustomDatePicker;
