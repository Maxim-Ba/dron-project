import { Button, Col, Row } from "antd";
import { CSSProperties, FunctionComponent, useCallback, useEffect } from "react";
import { NavLink } from "react-router-dom";
import clientsAPI from "../../backendAPI/clientsAPI";
import { customStyleButton, gray } from "../../custom-styles-for-antd/styleVariables";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { getClients } from "../../store/actionCreators/editClientsActions";
import { customButtonsStyleType } from "../../types/buttonTypes";
import { routesEnum } from "../../types/routes";
import { generateCSSColor } from "../../utils/generateCSSColor";
import CustomCascader from "../CustomCascader";
import CustomDatePicker from "../CustomDatePicker";
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
  const { setOnLeftOrderViev, setOnRightOrderViev } = useActions();
  const { isDisabled, isOnRight } = useTypedSelector(state => state.viewOrder);
  const {
    backBackgroundBack,
    backBackgroundNext,
    btnColorBack,
    btnColorNext,
    generalBackground,
    generalColor,
  } = useTypedSelector(state => state.options);


  const handleGetClients = async () => {
    // isFetch
    const data = await clientsAPI.getClients();
    getClients(data);
    // isFetch
  };



  useEffect(function () {
    handleGetClients();
    return () => { setOnLeftOrderViev(); };
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
              <CustomCascader defaultValue={""} options={[]} />
            </Col>

            <Col span={24} className="order-creation__item">
              <CustomDatePicker props={{ width: width }} />
            </Col>
          </Row>

          {/* сделать период по дате */}
          <Row gutter={[0, 16]} justify='center' align="top" className="order-view__general-list-row">

            <Col span={24} className="order-creation__item">
              <Button shape={shape} style={{ ...style, ...width }} type={type}>
                Общий список
              </Button>
            </Col>

            <Col span={24} className="order-creation__item">
              <CustomDatePicker props={{ width: width }} />
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
              disabled={isDisabled}
              onClick={isOnRight ? undefined : setOnRightOrderViev}
            >
              {customButtonsStyleType.show}
            </Button>
          </div>
        </div>
      </Footer>
    </>
  );
};

export default OrderViewCN;