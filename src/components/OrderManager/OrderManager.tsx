import { Button, Layout } from "antd";
import { CSSProperties, FunctionComponent } from "react";
import { customButtonsStyleType } from "../../types/buttonTypes";
import CustomButton from "../CustomButton";
import Header from "../Header/Header";
import { grey, lime } from '@ant-design/colors';
import { customStyleButton, gray } from "../../custom-styles-for-antd/styleVariables";
import { NavLink } from "react-router-dom";

interface OrderManagerProps {

}

const { type, block, shape, style } = customStyleButton;

const OrderManager: FunctionComponent<OrderManagerProps> = () => {
  return (
    <Layout className='order-manager'>
      <Header buttonName={customButtonsStyleType.orderManager}/>
      <div style={gray} className='order-manager__container'>
        <NavLink to="/order-creation" className="order-manager__navlink">
          <Button type={type} block={block} shape={shape} style={style}>
            {customButtonsStyleType.createOrder}
          </Button>
        </NavLink>
        <NavLink to="/order-view" className="order-manager__navlink">
          <Button type={type} block={block} shape={shape} style={style}>
            {customButtonsStyleType.viewOrder}
          </Button>
        </NavLink>
      </div>
    </Layout>
  );
};

export default OrderManager;