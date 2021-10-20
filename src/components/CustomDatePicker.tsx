import React, { FunctionComponent } from "react";
import { DatePicker, Space } from "antd";
import moment from 'moment';
import 'moment/locale/ru';

import locale from 'antd/es/date-picker/locale/ru_RU';


interface CustomDatePickerProps {
  props: any
}

function onChange(date: moment.Moment | null, dateString: string) {
  console.log(date);
  console.log( dateString);
}

const CustomDatePicker: FunctionComponent<CustomDatePickerProps> = ({props}:CustomDatePickerProps) => {

  return (
    // <Space direction="vertical">
      <DatePicker onChange={onChange} locale={locale} style={props.width}/>
    // {/* </Space> */}
  );
};

export default CustomDatePicker;
