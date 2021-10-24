import { Button, Layout } from "antd";
import { CSSProperties, FunctionComponent } from "react";
import { customButtonsStyleType } from "../../types/buttonTypes";
import CustomButton from "../CustomButton";
import Header from "../Header/Header";
import { grey, lime } from '@ant-design/colors';
import { customStyleButton, gray } from "../../custom-styles-for-antd/styleVariables";
import { NavLink } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { generateCSSColor } from "../../utils/generateCSSColor";

interface OrderManagerProps {

}

const { type, block, shape, style } = customStyleButton;

const OrderManager: FunctionComponent<OrderManagerProps> = () => {
  const {
    generalBackground,
    generalColor,
  } = useTypedSelector(state=>state.options);
  return (
    <Layout 
      className='order-manager' 
      style={
        {backgroundColor: generateCSSColor(generalBackground), 
        color: generateCSSColor(generalColor)}
      }
    >
      <Header buttonName={customButtonsStyleType.orderManager}/>
      <div 
      style={
        {backgroundColor: generateCSSColor(generalBackground), 
        color: generateCSSColor(generalColor)}
      }
      className='order-manager__container'>
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