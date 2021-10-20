import { Layout } from "antd";
import { CSSProperties, FunctionComponent, ReactNode, useState } from "react";
import { useActions } from "../hooks/useActions";
import { customButtonsStyleType } from "../types/buttonTypes";
import CustomButton from "./CustomButton";
import FooterButtons from "./FooterButtons";
import MainMenu from "./MainMenu";

interface GeneralContainerProps {
  headerTitleButton: customButtonsStyleType,
  footerButtonsArray: customButtonsStyleType[],
  contentNode: ReactNode
  callbacks?:Array<()=>{}>
}
const footerStyle: CSSProperties = {
  position: 'fixed',
  zIndex: 1,
  width: '100%',
  bottom: 0,
  padding: '16px 0',
  height: 64,

};
const headerStyle: CSSProperties = {
  position: 'fixed',
  zIndex: 1,
  width: '100%',
};

const contentStyle: CSSProperties = {
  width: '100%',
  marginTop: 64,
};

const GeneralContainer: FunctionComponent<GeneralContainerProps> = ({ contentNode, footerButtonsArray, headerTitleButton, callbacks }: GeneralContainerProps) => {
  const { Header, Content, Footer } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const {setOnRight} = useActions();


  return (
    <Layout>
      <MainMenu collapsed={collapsed} />
      <Header style={headerStyle}>
        <CustomButton styleType={{ styleType: headerTitleButton }} onClick={toggleCollapsed} />

      </Header>
      <Content style={contentStyle}>
        {contentNode}
      </Content>
      <Footer style={footerButtonsArray.length ? footerStyle : { display: 'none' }}>
        <FooterButtons renderButtonsArray={footerButtonsArray} callbacks={[,setOnRight]}/>
      </Footer>
    </Layout>

  );
};

export default GeneralContainer;