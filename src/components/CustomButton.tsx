import React, { FunctionComponent } from "react";
import { Button } from 'antd';
import { lime, geekblue } from '@ant-design/colors';
import { customButtonsStyleType, IButtonStyleType } from "../types/buttonTypes";
import { ButtonShape, ButtonType } from "antd/lib/button";
import { PrinterOutlined, RedoOutlined } from '@ant-design/icons';
import { Redirect } from "react-router";
import { NavLink } from "react-router-dom";
import { navLinkStyle } from "../custom-styles-for-antd/styleVariables";
import { useTypedSelector } from "../hooks/useTypedSelector";
type MouseEvent = (event: React.MouseEvent<HTMLButtonElement>) => void


interface CustomButtonProps {
  styleType: IButtonStyleType,
  onClick?: any
}
interface ICustomStyleButton {
  type: ButtonType,
  block: boolean,
  icon?: React.ReactNode
  shape: ButtonShape,
  style: {
    border: string,
    backgroundColor: string,
    width?: string
    color?: 'black' | 'white'
  },
}
const customStyleButtonSmall: ICustomStyleButton = {
  type: 'primary',
  block: false,
  shape: 'round',
  style: {
    border: 'none',
    backgroundColor: lime[7],
    color: 'black'
  },
};



const customStyleButtonMedium: ICustomStyleButton = {
  type: 'primary',
  block: false,
  shape: 'round',
  style: {
    border: 'none',
    backgroundColor: 'white',
    width: "100%",
    color: 'black'
  },
};
const customStyleButtonMediumBlue: ICustomStyleButton = {
  ...customStyleButtonMedium, style: {
    border: 'none',
    backgroundColor: geekblue[4],
    width: "70%",
    color: 'black'
  },
};

const customStyleButtonLarge: ICustomStyleButton = {
  type: 'primary',
  block: true,
  shape: 'round',
  style: {
    border: 'none',
    backgroundColor: lime[7],
  },
};

const customStyleButtonLargeBlue: ICustomStyleButton = {
  ...customStyleButtonLarge, style: {
    border: 'none',
    backgroundColor: geekblue[4],
  },
};

const renderButton = (styleType: IButtonStyleType, onClick: any, props:any) => {
  const { type: typeL, block: blockL, shape: shapeL, style: styleL } = customStyleButtonLarge;
  const { type: typeLB, block: blockLB, shape: shapeLB, style: styleLB } = customStyleButtonLargeBlue;
  const { type: typeM, block: blockM, shape: shapeM, style: styleM } = customStyleButtonMedium;
  const { type: typeMB, block: blockMB, shape: shapeMB, style: styleMB } = customStyleButtonMediumBlue;
  const { type: typeS, block: blockS, shape: shapeS, style: styleS } = customStyleButtonSmall;
  switch (styleType.styleType) {
    case customButtonsStyleType.orderCreation:
      return (
        <Button
          type={typeL}
          block={blockL}
          shape={shapeL}
          style={styleL}
          onClick={onClick}
        >
          {customButtonsStyleType.orderCreation}
        </Button>
      );
    case customButtonsStyleType.orderManager:
      return (
        <Button
          type={typeL}
          block={blockL}
          shape={shapeL}
          style={styleL}
          onClick={onClick}

        >
          {customButtonsStyleType.orderManager}
        </Button>
      );
    case customButtonsStyleType.listOrder:
      return (
        <Button
          type={typeL}
          block={blockL}
          shape={shapeL}
          style={styleL}
          onClick={onClick}

        >
          {customButtonsStyleType.listOrder}
        </Button>
      );
    case customButtonsStyleType.createOrder:
      return (
        <NavLink to="/order-creation" >
          <Button
            type={typeLB}
            block={blockLB}
            shape={shapeLB}
            style={styleLB}
            onClick={onClick}

          >
            {customButtonsStyleType.createOrder}
          </Button>
        </NavLink>

      );
    case customButtonsStyleType.viewOrder:
      return (
        <NavLink to="/order-view" >
          <Button
            type={typeLB}
            block={blockLB}
            shape={shapeLB}
            style={styleLB}
            onClick={onClick}

          >
            {customButtonsStyleType.viewOrder}
          </Button>
        </NavLink>

      );
    case customButtonsStyleType.back:
      return (
        <NavLink to="/" className="nav-link">
          <Button
            type={typeM}
            block={blockM}
            shape={shapeM}
            style={styleM}
            onClick={onClick}

          >
            {customButtonsStyleType.back}
          </Button>
        </NavLink>

      );
    case customButtonsStyleType.cancel:
      return (
        <NavLink to="/" className="nav-link">
          <Button
            type={typeM}
            block={blockM}
            shape={shapeM}
            style={styleM}
            onClick={onClick}

          >
            {customButtonsStyleType.cancel}
          </Button>
        </NavLink>

      );
    case customButtonsStyleType.next:

      return (
        <Button
          type={typeMB}
          block={blockMB}
          shape={shapeMB}
          style={styleMB}
          onClick={onClick}
          disabled={props.disabled}
        >
          {customButtonsStyleType.next}
        </Button>


      );
      case customButtonsStyleType.create:
        return (
  
          <Button
            type={typeMB}
            block={blockMB}
            shape={shapeMB}
            style={styleMB}
            onClick={onClick}
  
          >
            {customButtonsStyleType.create}
          </Button>
  
  
        );
    case customButtonsStyleType.show:
      return (
        <NavLink to='/' className="nav-link">
          <Button
            type={typeMB}
            block={blockMB}
            shape={shapeMB}
            style={styleMB}
            onClick={onClick}

          >
            {customButtonsStyleType.show}
          </Button>
        </NavLink>

      );
    case customButtonsStyleType.refresh:
      return (
        <Button
          type={typeS}
          block={blockS}
          icon={<RedoOutlined />}
          shape={shapeS}
          style={styleS}
          onClick={onClick}

        >
        </Button>
      );
    case customButtonsStyleType.print:
      return (
        <Button
          type={typeS}
          block={blockS}
          icon={<PrinterOutlined />}
          shape={shapeS}
          style={styleS}
          onClick={onClick}

        />

      );
    default:
      return null;
  }
};

const CustomButton: FunctionComponent<CustomButtonProps> = ({ styleType, onClick }: CustomButtonProps) => {
  const {isNextBtnDisabled, isContentOnRight } =useTypedSelector(state=>state.orderCreation);
const props = {
  disabled:isNextBtnDisabled
};
  return renderButton(styleType, onClick, props);
};
export default CustomButton;