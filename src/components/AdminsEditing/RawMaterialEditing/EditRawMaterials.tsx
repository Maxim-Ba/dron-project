import { Button, Spin } from "antd";
import { FunctionComponent, useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import rawMaterialAPI from "../../../backendAPI/rawMaterialAPI";
import { blackText, customStyleButton, redColor, whiteColor } from "../../../custom-styles-for-antd/styleVariables";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { customButtonsStyleType } from "../../../types/buttonTypes";
import { TypesofMW } from "../../../types/ModalWindowTypes/ModalWindowTypes";
import { routesEnum } from "../../../types/routes";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import FormAddMaterial from "./FormAddMaterial";
import FormChangeMaterial from "./FormChangeMaterial";
import FormDeleteMaterial from "./FormDeleteMaterial";
import {TypeMV as TypesMW} from "../../../types/ModalWindowTypes/ModalWindowTypes";
import ModlWindow from "../ModalWindow/ModalWindow";
import WrapperButtons from "../WrapperButtons";
import MaterialsTable from "./MaterialsTable";

interface EditRawMaterialsProps {

}

const { block, shape, type, style } = customStyleButton;
const Buttons: FunctionComponent = () => {
  const { materialSelected,isFetch } = useTypedSelector(state => state.rawMaterials);
  const [refreshDisabled, setRefreshDisabled] = useState(false);
  const adapterToButtonDisabled = ():boolean=>{
    if (materialSelected === 0) {
      return !true;
    }
    return !materialSelected;
  };
  const { getRawMaterials, fetchRawMaterials,setVisibleMW, setType } = useActions();

  const history = useHistory();

  const handleGetMaterials = async () => {
    try {
      fetchRawMaterials(true);
      setRefreshDisabled(true);
      const data = await rawMaterialAPI.getRawMaterials();
      if (data === 401) {
        fetchRawMaterials(false);
        return history.goBack();
      }
      getRawMaterials(data);
    } catch (error) {
      console.log(error);
    }
    finally {
      setRefreshDisabled(false);
      fetchRawMaterials(false);
    }

  };

  return (
    <>

      <Button
        block={block}
        shape={shape}
        type={type}
        style={style}
        className="admin__button"
        onClick={() => {
          setType(TypesofMW.RAW_MATERIALS_CREATE);
          setVisibleMW(true);
        }}
      >
        Добавить сырье
      </Button>
      <Button
        block={block}
        shape={shape}
        type={type}
        style={{ ...style, ...redColor }}
        className="admin__button"
        disabled={ adapterToButtonDisabled() }
        onClick={() => {
          setType(TypesofMW.RAW_MATERIALS_DELETE);
          setVisibleMW(true);
        }}
      >
        Удалить сырье
      </Button>
      <Button
        block={block}
        shape={shape}
        type={type}
        style={style}
        className="admin__button"
        disabled={ adapterToButtonDisabled() }
        onClick={() => {
          setType(TypesofMW.RAW_MATERIALS_CHANGE);
          setVisibleMW(true);
        }}
      >
        Редактировать сырье
      </Button>
      <Button
        block={block}
        shape={shape}
        type={type}
        style={style}
        loading={refreshDisabled}
        className="admin__button"
        onClick={() => handleGetMaterials()}
      >
        Обновить таблицу
      </Button>
    </>

  );
};

const EditRawMaterials: FunctionComponent<EditRawMaterialsProps> = () => {
  const { rawMaterialsList, isFetch } = useTypedSelector(state => state.rawMaterials);
  const { typeMV } = useTypedSelector(state => state.modalWindow);

  const { getRawMaterials, setType, getUnits, fetchRawMaterials } = useActions();
  const history = useHistory();

  const handleGetMaterials = async () => {
    try {
      fetchRawMaterials(true);
      const data = await rawMaterialAPI.getRawMaterialsAndUnits();
      if (data === 401) {
        fetchRawMaterials(false);
        return history.goBack();
      }
      getRawMaterials(data?.rawMaterials);
      getUnits(data?.units);
    } catch (error) {
      console.log(error);
    } finally {
      fetchRawMaterials(false);
    }
    
  };

  useEffect(() => {
    setType(TypesofMW.RAW_MATERIALS_CREATE);
    handleGetMaterials();
    return()=>{fetchRawMaterials(false);};
  }, []);


  const swichPropsMW = (type: TypesMW):{title: string,children: React.ReactNode} => {

    let children, title;

      switch (type) {
        case TypesofMW.RAW_MATERIALS_CREATE:
          title = "Добавить сырье";
          children = <FormAddMaterial />;
          return {  title, children };
        case TypesofMW.RAW_MATERIALS_DELETE:
          title = "Удалить сырье";
          children = <FormDeleteMaterial />;
          return {  title, children };
        case TypesofMW.RAW_MATERIALS_CHANGE:
          title = "Редактировать сырье";
          children = <FormChangeMaterial />;
          return {  title, children };
        default:
          return {  title:'Ошибка', children };
      }
    };
  
    return (
  
      <>
  
        <Header buttonName={customButtonsStyleType.rawMaterials} />
        <ModlWindow
          children={swichPropsMW(typeMV).children}
          title={swichPropsMW(typeMV).title}
          type={typeMV}
        />
        <div className={'order-creation'}>
          <section className="order-creation__section">
            <Spin spinning={isFetch} tip="Loading...">
              <WrapperButtons buttons={<Buttons />} />
              <MaterialsTable dataTable={rawMaterialsList} />
            </Spin>
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
            
          </div>
        </Footer>
      </>
    );

};

export default EditRawMaterials;