import { Button, Col, Row, Spin } from "antd";
import { CSSProperties, FunctionComponent, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import clientsAPI from "../../backendAPI/clientsAPI";
import OrderAPI from "../../backendAPI/OrderAPI";
import { customStyleButton } from "../../custom-styles-for-antd/styleVariables";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { customButtonsStyleType } from "../../types/buttonTypes";
import { CascaderTypes } from "../../types/customCascaderTypes";
import { IDatacolumn } from "../../types/dataColumn";
import { TypesofMW } from "../../types/ModalWindowTypes/ModalWindowTypes";
import { routesEnum } from "../../types/routes";
import { generateCSSColor } from "../../utils/generateCSSColor";
import { useGenerateOptionCascaderClient } from "../../utils/generateOptionCascader";
import CustomCascader from "../CustomCascader";
import CustomRangePicker from "../CustomRangePicker";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Table from "../Table";

interface OrderViewCNProps {

}

const width: CSSProperties = {
  minWidth: 196
};
const { block, shape, style, type, } = customStyleButton;

const OrderViewCN: FunctionComponent<OrderViewCNProps> = () => {
  const { setOnLeftOrderViev, setOnRightOrderViev, getClients, selectDateStatrVO, selectDateEndVO, selectClientVO, setDisabledNextBtn, setUnaisabledNextBtn, setTableDataVO, toggleFetchVO } = useActions();
  const { isDisabled, isFetch, isOnRight, selectedClient, selectedDateStart, selectedDateEnd, tableData } = useTypedSelector(state => state.viewOrder);
  const {
    backBackgroundBack,
    backBackgroundNext,
    btnColorBack,
    btnColorNext,
    generalBackground,
    generalColor,
  } = useTypedSelector(state => state.options);
  const history = useHistory();


  const handleGetClients = async () => {
    try {
      toggleFetchVO(true);
      const data = await clientsAPI.getClients();
      if (data.message) {
        toggleFetchVO(false);
        history.goBack();
      }
      if (data === 401) {
        toggleFetchVO(false);
        return history.goBack();
      }
      getClients(data);
    } catch (error) {
      console.log(error);
    } finally{
      toggleFetchVO(false);
    }
  };

  const showOrdersData = async () => {
    try {
      toggleFetchVO(true);
      const ordersData = await OrderAPI.getOrdersByClient(selectedClient?.id as number, selectedDateStart, selectedDateEnd);
      if (ordersData === 401) {
        toggleFetchVO(false);
        return history.goBack();
      }
      setTableDataVO(ordersData as IDatacolumn[]);
      setOnRightOrderViev();
    } catch (error) {
      console.log(error);
    } finally{
      toggleFetchVO(false);
    }
  };

  const handleGetAllClients = async () => {
    try {
      toggleFetchVO(true);
      const ordersData = await OrderAPI.getOrders(selectedDateStart, selectedDateEnd);
      if (ordersData === 401) {
        toggleFetchVO(false);
        return history.goBack();
      }
      setTableDataVO(ordersData as IDatacolumn[]);
      setOnRightOrderViev();
    } catch (error) {
      console.log(error);
    } finally{
      toggleFetchVO(false);
    }
    

  };
  const getExelFile = async()=>{
    const ordersData = await OrderAPI.getExelFile(tableData);
    
  };
  const {setType} = useActions();

  useEffect(function () {
    selectedClient ? setUnaisabledNextBtn() : setDisabledNextBtn();
  }, [selectedClient]);

  useEffect(function () {
    setType(TypesofMW.ORDER_CHANGE);
    handleGetClients();
    return () => {
      selectClientVO(null);
      setOnLeftOrderViev();
      selectDateStatrVO(null);
      selectDateEndVO(null);
      setTableDataVO([]);
      toggleFetchVO(false);
    };
  }, []);

  return (
    <>
      <Header buttonName={customButtonsStyleType.listOrder} />
      <div
        style={
          {
            backgroundColor: generateCSSColor(generalBackground),
            color: generateCSSColor(generalColor)
          }
        }
        className={isOnRight ? "transform-translate order-creation" : 'order-creation'}>
        <section
          className="order-creation__section"
        >
          <Spin spinning={isFetch} tip="Loading...">

          <Row gutter={[0, 16]} justify='center' align="top">
            <Col span={24} className="order-creation__item">
              <CustomCascader
                defaultValue={selectedClient ? selectedClient.name : ''}
                options={useGenerateOptionCascaderClient()}
                typeCascader={CascaderTypes.SET_ORDER_VIEW}
              />
            </Col>

            <Col span={24} className="order-creation__item">
              <CustomRangePicker />
            </Col>
          </Row>

          <Row gutter={[0, 16]} justify='center' align="top" className="order-view__general-list-row">
            <Col span={24} className="order-creation__item">
              <Button
                shape={shape}
                style={{ ...style, ...width }}
                type={type}
                onClick={handleGetAllClients}
              >
                Общий список
              </Button>
            </Col>
          </Row>
          </Spin>
        </section>


        <section
          className="order-creation__section order-creation__section_j-c-center"
        >
          <Table />
        </section>

      </div>
      <Footer >
        <div className="order-creation__button-wrapper">
          <NavLink to={isOnRight ? routesEnum.ORDER_VIEW : routesEnum.ORDER_MANAGER} className="order-creation__navlink">
            <Button
              block={block}
              type={type}
              shape={shape}
              style={{
                ...style,
                backgroundColor: generateCSSColor(backBackgroundBack),
                color: generateCSSColor(btnColorBack)
              }}
              onClick={isOnRight ? setOnLeftOrderViev : undefined}
            >
              {isOnRight ? customButtonsStyleType.back : customButtonsStyleType.cancel}
            </Button>
          </NavLink>

          {!isOnRight
            ? <div className="order-creation__navlink">
              <Button
                block={block}
                type={type}
                shape={shape}
                style={{
                  ...style,
                  backgroundColor: generateCSSColor(backBackgroundNext),
                  color: generateCSSColor(btnColorNext),
                  opacity: isDisabled ? 0.5 : 1
                }}

                disabled={isDisabled}
                onClick={showOrdersData}
              >
                {customButtonsStyleType.show}
              </Button>
            </div>
            : 
            <div className="order-creation__navlink">
            <Button
              block={block}
              type={type}
              shape={shape}
              style={{
                ...style,
                backgroundColor: generateCSSColor(backBackgroundNext),
                color: generateCSSColor(btnColorNext),
              }}

              onClick={getExelFile}
            >
              {customButtonsStyleType.print}
            </Button>
          </div>}
        </div>
      </Footer>
    </>
  );
};

export default OrderViewCN;