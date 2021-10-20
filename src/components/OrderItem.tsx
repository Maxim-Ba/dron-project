import { Col, Row } from "antd";
import { FunctionComponent } from "react";
import { IOrder } from "../types/dataColumn";

interface OrderItemProps {
  order: IOrder
}

const OrderItem: FunctionComponent<OrderItemProps> = ({order}:OrderItemProps) => {
  const {date, rawMaterial, amount, price} = order;
  return ( 
<Row gutter={16}>
      <Col className="gutter-row" span={4}>
        <div >{date}</div>
      </Col>
      <Col className="gutter-row" span={8}>
        <div >{rawMaterial}</div>
      </Col>
      <Col className="gutter-row" span={8}>
        <div >{amount + ' кг'}</div>
      </Col>
      <Col className="gutter-row" span={4}>
        <div >{price + ' руб'}</div>
      </Col>
  </Row>
  );
};

export default OrderItem;