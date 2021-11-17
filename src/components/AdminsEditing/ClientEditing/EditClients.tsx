import { Button } from "antd";
import React, { FunctionComponent, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { blackText, customStyleButton, redColor, whiteColor } from "../../../custom-styles-for-antd/styleVariables";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { customButtonsStyleType } from "../../../types/buttonTypes";
import { routesEnum } from "../../../types/routes";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import ClientTable from "./ClientsTable";
import ModlWindow from "../ModalWindow/ModalWindow";
import WrapperButtons from "../WrapperButtons";
import FormAddClient from "./FormAddClient";
import clientsAPI from "../../../backendAPI/clientsAPI";
import { TypeMV as TypesMW, TypesofMW } from "../../../types/ModalWindowTypes/ModalWindowTypes";
import FormChangeClient from "./FormChangeClient";
import FormDeleteClient from "./FormDeleteClient";

interface EditClientsProps {

}

const { block, shape, type, style } = customStyleButton;
const Buttons: FunctionComponent = () => {
  const { isSelect } = useTypedSelector(state => state.clients);
  const [refreshDisabled, setRefreshDisabled] = useState(false);
  const adapterToButtonDisabled = ():boolean=>{
    if (isSelect === 0) {
      return !true;
    }
    return !isSelect;
  };
  const { getClients } = useActions();

  const handleGetClients = async () => {
    try {
      setRefreshDisabled(true);
      const data = await clientsAPI.getClients();
      getClients(data);

    } catch (error) {
      console.log(error);
    }
    finally {
      setRefreshDisabled(false);
    }

  };

  const { setVisibleMW, setType } = useActions();

  return (
    <>

      <Button
        block={block}
        shape={shape}
        type={type}
        style={style}
        className="admin__button"
        onClick={() => {

          setType(TypesofMW.CLIENT_CREATE);
          setVisibleMW(true);
        }}
      >
        Добавить клиента
      </Button>
      <Button
        block={block}
        shape={shape}
        type={type}
        style={{ ...style, ...redColor }}
        className="admin__button"
        disabled={ adapterToButtonDisabled() }
        onClick={() => {
          setType(TypesofMW.CLIENT_DELETE);
          setVisibleMW(true);
        }}
      >
        Удалить клиента
      </Button>
      <Button
        block={block}
        shape={shape}
        type={type}
        style={style}
        className="admin__button"
        disabled={ adapterToButtonDisabled() }
        onClick={() => {
          setType(TypesofMW.CLIENT_CHANGE);
          setVisibleMW(true);
        }}
      >
        Редактировать клиента
      </Button>
      <Button
        block={block}
        shape={shape}
        type={type}
        style={style}
        loading={refreshDisabled}
        className="admin__button"
        onClick={() => handleGetClients()}
      >
        Обновить таблицу
      </Button>
    </>

  );
};


const EditClients: FunctionComponent<EditClientsProps> = () => {

  const { clientList } = useTypedSelector(state => state.clients);
  const { typeMV } = useTypedSelector(state => state.modalWindow);

  const { getClients, setType } = useActions();


  const handleGetClients = async () => {
    const data = await clientsAPI.getClients();
    getClients(data);
  };
  useEffect(() => {
    setType(TypesofMW.CLIENT_CREATE);

    handleGetClients();
  }, []);


  const swichPropsMW = (type: TypesMW):{title: string,children: React.ReactNode} => {

    let children, title;

    switch (type) {
      case TypesofMW.CLIENT_CREATE:
        title = "Добавить клиента";
        children = <FormAddClient />;
        return {  title, children };
      case TypesofMW.CLIENT_DELETE:
        title = "Удалить клиента";
        children = <FormDeleteClient />;
        return {  title, children };
      case TypesofMW.CLIENT_CHANGE:
        title = "Редактировать клиента";
        children = <FormChangeClient />;
        return {  title, children };
      default:
        return {  title:'Ошибка', children };
    }
  };

  return (

    <>

      <Header buttonName={customButtonsStyleType.clients} />
      <ModlWindow
        children={swichPropsMW(typeMV).children}
        title={swichPropsMW(typeMV).title}
        type={typeMV}
      />
      <div className={'order-creation'}>
        <section className="order-creation__section">
          <WrapperButtons buttons={<Buttons />} />
          <ClientTable dataTable={clientList} />
        </section>
      </div>


      <Footer >
        <div className="order-creation__button-wrapper">
          <NavLink
            to={true ? routesEnum.ADMIN : routesEnum.ADMIN}
            className="order-creation__navlink"
          >
            <Button
              block={block}
              type={type}
              shape={shape}
              style={{ ...blackText, ...whiteColor, ...style }}
              onClick={undefined}
            >
              {true ? customButtonsStyleType.back : customButtonsStyleType.cancel}
            </Button>
          </NavLink>
          {/* <div className="order-creation__navlink">
            <Button
              block={block}
              type={type}
              shape={shape}
              style={style}
              disabled={true}
            >
              {customButtonsStyleType.next}
            </Button>
          </div> */}


        </div>
      </Footer>
    </>
  );
};

export default EditClients;