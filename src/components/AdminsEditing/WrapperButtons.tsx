import { MenuOutlined, UpSquareOutlined } from "@ant-design/icons";
import { Collapse } from "antd";
import { FunctionComponent, ReactNode } from "react";

interface WrapperButtonsProps {
  buttons: ReactNode
}
const { Panel } = Collapse;

const WrapperButtons: FunctionComponent<WrapperButtonsProps> = ({ buttons }) => {
  return (

    <Collapse
      accordion
      expandIconPosition='right'
      className="client_collapse"
      ghost={true}
      expandIcon={({ isActive }) => isActive
        ? <UpSquareOutlined style={{ fontSize: '20px' }} />
        : <MenuOutlined style={{ fontSize: '20px' }} />
      }

    >
      <Panel header={''} key="1"
        className="client_panel"
      >

        {buttons}
      </Panel>

    </Collapse>
  );
};

export default WrapperButtons;