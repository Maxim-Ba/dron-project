import { Button, Col, Row } from "antd";
import { CSSProperties, FunctionComponent, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { blackText, customStyleButton, gray, whiteColor } from "../../custom-styles-for-antd/styleVariables";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { customButtonsStyleType } from "../../types/buttonTypes";
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
  const { isDisabled, isOnRight } = useTypedSelector(state => state.viewOrder)
  useEffect(function () {
    return () => { setOnLeftOrderViev() }
  }, [])


  return (
    <>
      <Header buttonName={customButtonsStyleType.listOrder} />
      <div style={gray} className={isOnRight ? "transform-translate order-creation" : 'order-creation'}>
        <section className="order-creation__section">
          <Row gutter={[0, 16]} justify='center' align="top">
            <Col span={24} className="order-creation__item">
              <CustomCascader defaultValue={""} />
            </Col>
            <Col span={24} className="order-creation__item">
              <CustomDatePicker props={{ width: width }} />
            </Col>
          </Row>
          {/* сделать период по дате */}
          <Row gutter={[0, 16]} justify='center' align="top" className="order-view__general-list-row">
            <Col span={24} className="order-creation__item">
              <Button  shape={shape} style={{...style,...width}} type={type}>
                Общий список
            </Button>
            </Col>
            <Col span={24} className="order-creation__item">
              <CustomDatePicker props={{ width: width }} />
            </Col>
          </Row>

        </section>
        <section className="order-creation__section order-creation__section_j-c-center">
          <Table />
        </section>

      </div>
      <Footer >
        <div className="order-creation__button-wrapper">
          <NavLink to={isOnRight ? '/order-view' : '/'} className="order-creation__navlink">
            <Button
              block={block}
              type={type}
              shape={shape}
              style={{ ...blackText, ...whiteColor, ...style }}
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
              style={style}
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