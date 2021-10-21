import { Menu } from "antd";
import React, { CSSProperties, FunctionComponent } from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import { routesEnum } from "../types/routes";
interface MainMenuProps {
  collapsed: boolean
  onClick: () => void
}
const menuStyle: CSSProperties = {
  position: 'fixed',
  top: 64,
  left: 0,
  zIndex: 1001,
  paddingLeft: 5,
  paddingBottom: 10
};
const MainMenu: FunctionComponent<MainMenuProps> = ({ collapsed, onClick }: MainMenuProps) => {
  let location = useLocation();
  return (
    <div className="menu-wrapper">
      {collapsed && <div className="main-menu">
        <div className="main-menu__background" onClick={() => onClick()}>
        </div>

        <Menu style={menuStyle} mode='inline' selectable={true}>
          {location.pathname !== routesEnum.ORDER_MANAGER
            ? <Menu.Item key="1">
              <NavLink to={routesEnum.ORDER_MANAGER}>
                Заказменеджер
              </NavLink>
            </Menu.Item>
            : null}

          {location.pathname !== routesEnum.ADMIN
            ? <Menu.Item key="2">
              <NavLink to={routesEnum.ADMIN}>
                Админка
              </NavLink>
            </Menu.Item>
            : null}

          {location.pathname !== routesEnum.OPTIONS
            ? <Menu.Item key="3">
              <NavLink to={routesEnum.OPTIONS}>
                Настройки
              </NavLink>
            </Menu.Item>
            : null}

          {location.pathname !== routesEnum.GRAPH
            ? <Menu.Item key="4">
              <NavLink to={routesEnum.GRAPH}>
                Графики
              </NavLink>
            </Menu.Item>
            : null}

        </Menu>
      </div>}
    </div>

  );
};

export default MainMenu;