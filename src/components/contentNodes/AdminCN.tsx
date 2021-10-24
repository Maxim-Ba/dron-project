import { Button } from "antd";
import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import { customButtonsStyleType } from "../../types/buttonTypes";
import Header from "../Header/Header";
import {customStyleButton} from "../../custom-styles-for-antd/styleVariables"
import { routesEnum } from '../../types/routes';


interface AdminCNProps {
  
}

const {block,shape,type,style} = customStyleButton;

const AdminCN: FunctionComponent<AdminCNProps> = () => {
  return ( 
<>
<Header buttonName={customButtonsStyleType.admin} />

<section className="admin">

  <NavLink to={routesEnum.ADMIN_CLIENTS}>
    <Button block={block} shape={shape} type={type} style={style} className="admin__button">
      Редактировать БД клиентов
    </Button>
  </NavLink>

  <NavLink to={routesEnum.ADMIN_PRICE}>
    <Button block={block} shape={shape} type={type} style={style} className="admin__button">
      Редактировать БД прайса
    </Button>
  </NavLink>

  <NavLink to={routesEnum.ADMIN_RAW_MATERIALS}>
    <Button block={block} shape={shape} type={type} style={style} className="admin__button">
      Редактировать БД сырья
    </Button>
  </NavLink>
    
</section>
</>
  );
};

export default AdminCN;