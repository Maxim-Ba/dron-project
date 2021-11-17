import { CSSProperties, FunctionComponent, useEffect } from "react";
import { Row, Col, Button } from "antd";
import CustomCascader from "../CustomCascader";
import CustomDatePicker from "../CustomDatePicker";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { customButtonsStyleType } from "../../types/buttonTypes";
import { customStyleButton } from "../../custom-styles-for-antd/styleVariables";
import { NavLink } from "react-router-dom";
import AddButton from "../buttons/AddButton";
import RawMaterialItem from "../RawMaterialItem/RawMaterialItem";
import { routesEnum } from "../../types/routes";
import { generateCSSColor } from "../../utils/generateCSSColor";
import clientsAPI from "../../backendAPI/clientsAPI";
import { useGenerateOptionCascaderClient, useGenerateOptionCascaderPrice, useGenerateOptionCascaderRawMaterials } from "../../utils/generateOptionCascader";
import priceAPI from "../../backendAPI/priceAPI";
import { CascaderTypes } from "../../types/customCascaderTypes";
import { datapickerTypes } from "../../types/dataPickerTypes";
import rawMaterialAPI from "../../backendAPI/rawMaterialAPI";

interface OrderCreationCNProps {

}


const width: CSSProperties = {
  minWidth: 196
};
const { block, shape, style, type, } = customStyleButton;


const OrderCreationCN: FunctionComponent<OrderCreationCNProps> = () => {
  const {
    isContentOnRight: isOnRight,
    isNextBtnDisabled,
    client,
    price,
    date
    } = useTypedSelector(state => state.orderCreation);

  const {
      setOnRight,
      setOnLeft,
      getClients,
      getPriceNames,
      setIsButtomUndisabled,
      setIsButtomDisabled,
      getRawMaterials,
      removeClientOrderCreation,
      removePriceOrderCreation,
      clearDateOrderCreation,
  } = useActions();

  const clearOrderCreationStore = () => {
    removeClientOrderCreation();
    removePriceOrderCreation();
    clearDateOrderCreation();
  };

  const rawMaterialList = useTypedSelector(state => state.orderCreation.rawMaterialList);
  const {
    backBackgroundBack,
    backBackgroundNext,
    btnColorBack,
    btnColorNext,
    generalBackground,
    generalColor,
  } = useTypedSelector(state => state.options);

  const handleGetClients = async () => {
    const data = await clientsAPI.getClients();
    getClients(data);
  };

  const handleGetPriceNames = async () => {
    const data = await priceAPI.getPriceNames();
    getPriceNames(data);
  };

  const handleGetRawMaterials = async () => {
    const materials = await rawMaterialAPI.getRawMaterials();
    getRawMaterials(materials);
      };

  useEffect(function () {
    Promise.all([handleGetClients(),handleGetPriceNames(),handleGetRawMaterials() ]);
    
    return () => { 
      setOnLeft(); 
      setIsButtomDisabled();
      clearOrderCreationStore();
    };
  }, []);

  useEffect(function () {

    client && price && date && setIsButtomUndisabled();
    
  }, [client,price,date]);
  const rawMaterialsNames= useGenerateOptionCascaderRawMaterials();

  return (
    <>
      <Header buttonName={customButtonsStyleType.orderCreation} />
      <div
        style={
          {
            backgroundColor: generateCSSColor(generalBackground),
            color: generateCSSColor(generalColor)
          }}
        className={isOnRight ? "transform-translate order-creation" : 'order-creation'}
      >
        <section
          className="order-creation__section"
        >

          <Row gutter={[0, 16]} justify='center' align="top">

            <Col span={24} className="order-creation__item">
              <CustomCascader
                            index={0}

                defaultValue={client?.name || ''}
                options={useGenerateOptionCascaderClient()}
                typeCascader={CascaderTypes.SET_CLIENT_ORDER_CREATION}
              />
            </Col>

            <Col span={24} className="order-creation__item">
              <CustomCascader
              index={0}
                defaultValue={price?.name || ''}
                options={useGenerateOptionCascaderPrice()}
                typeCascader={CascaderTypes.SET_PRICE_ORDER_CREATION}

              />
            </Col>

            <Col span={24} className="order-creation__item">
              <CustomDatePicker
                props={{
                  width: width,
                  type:datapickerTypes.ORDER_CREATION
                  }}
              />
            </Col>

          </Row>
        </section>

        <section className="order-creation__section order-creation__section_j-c-center">
          {rawMaterialList.map((rawMaterial, index: number) => {
            return <RawMaterialItem key={index} index={index} options={rawMaterialsNames} />;
          })}
          <AddButton />
        </section>

      </div>
      <Footer >

        <div className="order-creation__button-wrapper">
          <NavLink to={routesEnum.ORDER_MANAGER} className="order-creation__navlink">
            <Button
              block={block}
              type={type}
              shape={shape}
              style={{
                ...style,
                backgroundColor: generateCSSColor(backBackgroundBack),
                color: generateCSSColor(btnColorBack)
              }}
            >
              {customButtonsStyleType.cancel}
            </Button>
          </NavLink>

          <div className="order-creation__navlink">
            <Button
              block={block}
              type={type}
              shape={shape}
              style={{
                ...style,
                backgroundColor: generateCSSColor(backBackgroundNext),
                color: generateCSSColor(btnColorNext)
              }}
              disabled={isNextBtnDisabled}
              onClick={isOnRight ? undefined : setOnRight}
            >
              {customButtonsStyleType.next}
            </Button>
          </div>

        </div>
      </Footer>
    </>
  );
};

export default OrderCreationCN;