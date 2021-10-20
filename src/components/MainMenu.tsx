import { Button, Menu } from "antd";
import React, { CSSProperties, FunctionComponent, ReactNode, useState } from "react";
import { customButtonsStyleType } from "../types/buttonTypes";
import CustomButton from "./CustomButton";

interface MainMenuProps {
  collapsed: boolean
}
const menuStyle:CSSProperties = {
  position: 'fixed',
  top: 64,
  left: 0, 
  zIndex: 1001,
  paddingLeft:5,
  paddingBottom:10
};
const MainMenu: FunctionComponent<MainMenuProps> = ({ collapsed }: MainMenuProps) => {

  return (
    <div className="menu-wrapper">
      {collapsed && <div className="main-menu">
        <div className="main-menu__background" >
        </div>

        <Menu style={menuStyle } mode='inline' selectable={true}>
          <Menu.ItemGroup>
            1dfgdfgdfgdfgdfgdfgddd
          </Menu.ItemGroup>
          <Menu.ItemGroup>
            2
          </Menu.ItemGroup>
          <Menu.ItemGroup>
            3
          </Menu.ItemGroup>
        </Menu>
      </div>}
    </div>

  );
};

export default MainMenu;