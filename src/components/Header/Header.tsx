import { Button, Layout } from "antd";
import { FunctionComponent, useState } from "react";
import { customStyleButton, limeColor } from "../../custom-styles-for-antd/styleVariables";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { customButtonsStyleType } from "../../types/buttonTypes";
import { generateCSSColor } from "../../utils/generateCSSColor";
import MainMenu from "../MainMenu";

interface HeaderProps {
  buttonName: customButtonsStyleType
}

const { type, block, shape, style } = customStyleButton;
const Header: FunctionComponent<HeaderProps> = ({buttonName}) => {
  const { Header } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  const {
    backBackgroundBigBtn,
    backBackgroundHeader,
    btnColorBig,

  } = useTypedSelector(state=>state.options);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return ( 
    <div>
      <MainMenu collapsed={collapsed} onClick={toggleCollapsed} />
      <Header  className="header" style={{backgroundColor: generateCSSColor(backBackgroundHeader)}}>
        <Button 
          type={type} 
          block={block} 
          shape={shape} 
          style={{ ...style,
            backgroundColor: generateCSSColor(backBackgroundBigBtn), 
            color: generateCSSColor(btnColorBig)
          }}            
          onClick={toggleCollapsed}
        >
            {buttonName}
        </Button>
      </Header>
    </div>
  );
};

export default Header;