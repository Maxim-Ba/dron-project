import { Col, Row } from "antd";
import { CSSProperties, FunctionComponent } from "react";
import { customButtonsStyleType } from "../types/buttonTypes";
import CustomButton from "./CustomButton";

interface FooterButtonsProps {
  renderButtonsArray: customButtonsStyleType[]
  callbacks:Array<any> 
}
const colStyle: CSSProperties={
  display:'flex',
  justifyContent:'center'
};

const renderButtons = ({renderButtonsArray,callbacks}:FooterButtonsProps) => {
  return (
    <Row justify="space-around">
      {
        renderButtonsArray.map((nameButton,index) => {
          return (

            <Col span={24/renderButtonsArray.length} style={colStyle} key={index}>
              <CustomButton 
                styleType={{styleType:nameButton}} 
                onClick={callbacks[index]}
              />
            </Col>

          );
        })
      }
    </Row>
  );
};
const FooterButtons: FunctionComponent<FooterButtonsProps> = ({ renderButtonsArray, callbacks }: FooterButtonsProps) => {
  return (
    renderButtons({renderButtonsArray, callbacks})
  );
};

export default FooterButtons;