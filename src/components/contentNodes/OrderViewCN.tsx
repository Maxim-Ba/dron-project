import { Button, Col, DatePicker, Row } from "antd";
import { CSSProperties, FunctionComponent, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import clientsAPI from "../../backendAPI/clientsAPI";
import { customStyleButton } from "../../custom-styles-for-antd/styleVariables";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { customButtonsStyleType } from "../../types/buttonTypes";
import { CascaderTypes } from "../../types/customCascaderTypes";
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
  const { setOnLeftOrderViev, setOnRightOrderViev, getClients, selectDateStatrVO, selectDateEndVO, selectClientVO, setDisabledNextBtn, setUnaisabledNextBtn } = useActions();
  const { isDisabled, isOnRight, selectedClient } = useTypedSelector(state => state.viewOrder);
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
    // isFetch
    const data = await clientsAPI.getClients();
    if (data.message) {
      history.goBack();// redirect Login
    }
    getClients(data);
    // isFetch
  };

  useEffect(function () {
    selectedClient ? setUnaisabledNextBtn() : setDisabledNextBtn();
  }, [selectedClient]);

  useEffect(function () {
    handleGetClients();
    return () => {
      selectClientVO(null);
      setOnLeftOrderViev();
      selectDateStatrVO(null);
      selectDateEndVO(null);
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
              <Button shape={shape} style={{ ...style, ...width }} type={type}>
                Общий список
              </Button>
            </Col>
          </Row>
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
                onClick={isOnRight ? undefined : setOnRightOrderViev}
              >
                {customButtonsStyleType.show}
              </Button>
            </div>
            : null}
        </div>
      </Footer>
    </>
  );
};

export default OrderViewCN;