import { Button, Layout } from "antd";
import { CSSProperties, FunctionComponent, useState } from "react";
import { customStyleButton, limeColor } from "../../custom-styles-for-antd/styleVariables";
import { customButtonsStyleType } from "../../types/buttonTypes";
import CustomButton from "../CustomButton";
import MainMenu from "../MainMenu";

interface HeaderProps {
  buttonName: customButtonsStyleType
}

const { type, block, shape, style } = customStyleButton;
const Header: FunctionComponent<HeaderProps> = ({buttonName}) => {
  const { Header } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return ( 
    <div>
      <MainMenu collapsed={collapsed} onClick={toggleCollapsed} />
      <Header  className="header">
        <Button type={type} block={block} shape={shape} style={{...limeColor,...style}} onClick={toggleCollapsed}>{buttonName}</Button>
      </Header>
    </div>
  );
};

export default Header;