import { FunctionComponent } from "react";
import { Row, Col } from 'antd';

interface ClientViewProps {
  name: string,
  sum: number
}

const ClientView: FunctionComponent<ClientViewProps> = ({name, sum}) => {
  return ( 
<Row gutter={16} >
      <Col className="gutter-row" span={24-8} >
        <div className="client-view__bolder">{name}</div>
      </Col>
      <Col className="gutter-row" span={8} >
        <div className="client-view__bolder">{sum.toString() + ' руб'}</div>
      </Col>
  </Row>
  );
};

export default ClientView;