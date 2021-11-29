import { FunctionComponent } from "react";
import { Row, Col } from 'antd';

interface OrderViewPanelProps {
  sum: number,
  date: string | DateConstructor,
  id: number |null
}

const OrderViewPanel: FunctionComponent<OrderViewPanelProps> = ({ sum, date, id}) => {
  if (sum === null) {
    sum = 0;
  }
  return ( 
<Row gutter={16} >
      <Col className="gutter-row" span={24-8} >
        <div >{date}</div>
      </Col>

      <Col className="gutter-row" span={8} >
        <div >{sum.toString() + ' руб'}</div>
      </Col>
  </Row>
  );
};

export default OrderViewPanel;