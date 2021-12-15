import { FunctionComponent, useEffect } from "react";
import { Row, Col, Button } from 'antd';
import { useActions } from "../hooks/useActions";
import { EditOutlined } from "@ant-design/icons";
import { IMaterialList } from "../types/dataColumn";

interface OrderViewPanelProps {
  sum: number,
  date: string | DateConstructor,
  id: number ,
  materialList?:IMaterialList[]

}

const OrderViewPanel: FunctionComponent<OrderViewPanelProps> = ({ sum, date, id }) => {
  if (sum === null) {
    sum = 0;
  }
  const { setVisibleMW, selectOrderForChange } = useActions();

  useEffect(() => {
    return () => { setVisibleMW(false); };
  }, []);
  return (
      
      <Row
        gutter={16}
      >
        <Col className="gutter-row" span={24 - 14} >
          <div >{date}</div>
        </Col>

        <Col className="gutter-row" span={6} >
          <Button
            block={true}
            type="primary"
            shape="round"
            size={'small'}
            icon={<EditOutlined />}
            style={{
              backgroundColor: 'orange',
              color: 'black',
              border: 'none'
            }}

            onClick={(e) => {
              selectOrderForChange(id);
              setVisibleMW(true);
              e.stopPropagation();
            }}
          />
        </Col>

        <Col className="gutter-row" span={8} >
          <div >{sum.toString() + ' руб'}</div>
        </Col>
      </Row>

  );
};

export default OrderViewPanel;