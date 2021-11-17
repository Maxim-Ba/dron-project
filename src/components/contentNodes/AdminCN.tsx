import { Button } from "antd";
import { FunctionComponent } from "react";
import { NavLink, Redirect } from "react-router-dom";
import { customButtonsStyleType } from "../../types/buttonTypes";
import Header from "../Header/Header";
import { customStyleButton } from "../../custom-styles-for-antd/styleVariables";
import { routesEnum } from '../../types/routes';
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";

interface AdminCNProps {

}
const { block, shape, type, style } = customStyleButton;

const AdminCN: FunctionComponent<AdminCNProps> = () => {

  const { id, role } = useTypedSelector(state => state.user);

  const { logout } = useActions();

  const handleClick = () => {
    logout();
  };

  return (
    <>
      {!id && <Redirect to={routesEnum.LOGIN} />}

      <Header buttonName={customButtonsStyleType.admin} />

      <section className="admin">

        {role === 'admin' &&
          <NavLink to={routesEnum.ADMIN_CLIENTS}>
            <Button block={block} shape={shape} type={type} style={style} className="admin__button">
              Редактировать БД клиентов
            </Button>
          </NavLink>
        }

        {role === 'admin' &&
          <NavLink to={routesEnum.ADMIN_PRICE}>
            <Button block={block} shape={shape} type={type} style={style} className="admin__button">
              Редактировать БД прайса
            </Button>
          </NavLink>
        }

        {role === 'admin' &&
          <NavLink to={routesEnum.ADMIN_RAW_MATERIALS}>
            <Button block={block} shape={shape} type={type} style={style} className="admin__button">
              Редактировать БД сырья
            </Button>
          </NavLink>
        }

        <Button
          block={block}
          shape={shape}
          type={type}
          style={style}
          className="admin__button"
          onClick={handleClick}
        >
          Сменить пользователя
        </Button>

      </section>
    </>
  );
};

export default AdminCN;