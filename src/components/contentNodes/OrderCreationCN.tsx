import { CSSProperties, FunctionComponent, useEffect } from "react";
import { Row, Col, Button, Spin } from "antd";
import CustomCascader from "../CustomCascader";
import CustomDatePicker from "../CustomDatePicker";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { customButtonsStyleType } from "../../types/buttonTypes";
import { customStyleButton } from "../../custom-styles-for-antd/styleVariables";
import { NavLink, useHistory } from "react-router-dom";
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
import OrderAPI from "../../backendAPI/OrderAPI";

interface OrderCreationCNProps {

}


const width: CSSProperties = {
  minWidth: 196
};
const { block, shape, style, type, } = customStyleButton;


const OrderCreationCN: FunctionComponent<OrderCreationCNProps> = () => {
  const history = useHistory();
  const {
    isContentOnRight: isOnRight,
    isNextBtnDisabled,
    client,
    price,
    date,
    rawMaterialList,
    isFetch
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
    toggleFetchOrderCreation,
    clearRawMaterialsListOrderCreation
  } = useActions();

  const clearOrderCreationStore = () => {
    removeClientOrderCreation();
    removePriceOrderCreation();
    clearDateOrderCreation();
    toggleFetchOrderCreation(false);
  };

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
    if (data === 401) {
      return history.goBack();
    }
    getClients(data);
  };

  const handleGetPriceNames = async () => {
    const data = await priceAPI.getPriceNames();
    if (data === 401) {
      return history.goBack();
    }
    getPriceNames(data);
  };

  const handleGetRawMaterials = async () => {
    const materials = await rawMaterialAPI.getRawMaterials();
    if (materials === 401) {
      return history.goBack();
    }
    getRawMaterials(materials);
  };

  const createOrderHandle = async () => {
    toggleFetchOrderCreation(true);
    const normalazeData = OrderAPI.createOrderAdapter({ rawMaterialList, client, price, date });
    const orderResponse = await OrderAPI.createOrder(normalazeData);
    clearRawMaterialsListOrderCreation();
    toggleFetchOrderCreation(false);
    if (orderResponse.message) {
      clearRawMaterialsListOrderCreation();
      alert(orderResponse.message);
      return (history.goBack());
    }
  };

  useEffect(function () {
    toggleFetchOrderCreation(true);
    Promise.all([handleGetClients(), handleGetPriceNames(), handleGetRawMaterials()])
      .finally(() => {
        toggleFetchOrderCreation(false);
      });

    return () => {
      setOnLeft();
      setIsButtomDisabled();
      clearOrderCreationStore();
    };
  }, []);



  useEffect(function () {

    isOnRight && rawMaterialList.some(material => {
      return material.name;
    })
      ? setIsButtomUndisabled()
      : setIsButtomDisabled();

  }, [isOnRight, rawMaterialList]);



  useEffect(function () {

    client && price && date ? setIsButtomUndisabled() : setIsButtomDisabled();

  }, [client, price, date]);

  const rawMaterialsNames = useGenerateOptionCascaderRawMaterials();

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
          <Spin spinning={isFetch} tip="Loading...">
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
                    type: datapickerTypes.ORDER_CREATION
                  }}
                />
              </Col>

            </Row>
          </Spin>
        </section>

        <section className="order-creation__section order-creation__section_j-c-center">
          <Spin spinning={isFetch} tip="Loading...">
            {rawMaterialList.map((rawMaterial, index: number) => {
              return <RawMaterialItem key={index} index={index} options={rawMaterialsNames} />;
            })}
          </Spin>

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
                color: generateCSSColor(btnColorNext),
                opacity: isNextBtnDisabled ? 0.5 : 1
              }}
              onClick={isOnRight ? createOrderHandle : setOnRight}
              disabled={isNextBtnDisabled}
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