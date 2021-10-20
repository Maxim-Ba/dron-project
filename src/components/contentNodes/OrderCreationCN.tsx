import { CSSProperties, FunctionComponent, useEffect, useState } from "react";
import { grey } from '@ant-design/colors';
import Table from '../Table';
import { Row, Col, Button } from "antd";
import CustomCascader from "../CustomCascader";
import CustomDatePicker from "../CustomDatePicker";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { useActions } from "../../hooks/useActions";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { customButtonsStyleType } from "../../types/buttonTypes";
import { gray } from "../../custom-styles-for-antd/styleVariables";

interface OrderCreationCNProps {

}


const width: CSSProperties = {
  minWidth: 196
};

const OrderCreationCN: FunctionComponent<OrderCreationCNProps> = () => {
  const isOnRight = useTypedSelector(state => state.orderCreation.isContentOnRight);

  return (
    <>
      <Header buttonName={customButtonsStyleType.orderCreation} />
      <div style={gray} className={isOnRight ? "transform-translate order-creation" : 'order-creation'}>
        <section className="order-creation__section">
          <Row gutter={[0, 16]} justify='center' align="top">
            <Col span={24} className="order-creation__item"><CustomCascader defaultValue={""} /></Col>
            <Col span={24} className="order-creation__item"><CustomCascader defaultValue={""} /></Col>
            <Col span={24} className="order-creation__item"><CustomDatePicker props={{ width: width }} /></Col>
          </Row>
        </section>
        <section >
          <CustomCascader defaultValue={""} />
        </section>
        <Footer >
          <Button>sdfsdf</Button>
        </Footer>
      </div>
    </>
  );
};

export default OrderCreationCN;