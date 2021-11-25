import { Col, DatePicker, Row } from "antd";
import { FunctionComponent, useEffect, useState } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

interface CustomRangePickerProps {
  
}

const CustomRangePicker: FunctionComponent<CustomRangePickerProps> = () => {
  const {selectDateStatrVO, selectDateEndVO} = useActions();
  const {selectedDateStart,selectedDateEnd} = useTypedSelector(state=>state.viewOrder);
  const [endOpen,setEndOpen] = useState(false);
  useEffect(function () {
    return () => {
      selectDateStatrVO(null);
      selectDateEndVO(null);
    };
  }, []);

  const disabledStartDate = (startValue: any) => {
    if (!startValue || !selectedDateEnd) {
      return false;
    }
    return startValue.valueOf() > selectedDateEnd.valueOf();
  };

  const disabledEndDate = (endValue: any)=> {
    if (!endValue || !selectedDateStart) {
      return false;
    }
    return endValue.valueOf() <= selectedDateStart.valueOf();
  };

  
  // const onStartChange = (value: string) => {
  //   onChange('startValue', value);
  // };

  // const onEndChange = (value: string) => {
  //   onChange('endValue', value);
  // };

  const handleStartOpenChange = (open: any) => {
    if (!open) {
      setEndOpen( true);
    }
  };

  const handleEndOpenChange = (open: boolean ) => {
    setEndOpen( open);
  };



  return ( 
    <Row gutter={[0, 16]} justify='center' align="top">
    
    <Col span={24} className="order-creation__item">
      <DatePicker
        disabledDate={disabledStartDate}
        value={selectedDateStart as any}
        style={{ maxWidth: 300 }}
        onChange={(dates, dateStrings) => {
          console.log(dates, dateStrings);
          if (dates) {
            return selectDateStatrVO(dates as unknown as Date);
          }
          selectDateStatrVO(null);
        }}
        onOpenChange={handleStartOpenChange}
        placeholder='начало'
      />
    </Col>

    <Col span={24} className="order-creation__item">
      <DatePicker
              disabledDate={disabledEndDate}

        style={{ maxWidth: 300 }}
        onChange={(dates, dateStrings) => {
          console.log(typeof dateStrings);
          if (dates) {
            return selectDateEndVO(dates as unknown as Date);
          }
          selectDateEndVO(null);
        }}
        placeholder='конец'
        open={endOpen}
        onOpenChange={handleEndOpenChange}

      />
    </Col>
  </Row>

  );
};

export default CustomRangePicker;