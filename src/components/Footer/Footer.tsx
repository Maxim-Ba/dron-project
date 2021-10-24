import { FunctionComponent, ReactNode } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { generateCSSColor } from "../../utils/generateCSSColor";

interface FooterProps {
  children?:ReactNode
}

const Footer: FunctionComponent<FooterProps> = ({children}:FooterProps) => {
    const {backBackgroundFooter} = useTypedSelector(state=>state.options);
  return (
    <footer 
      className="footer"
      style={{ 
        backgroundColor: generateCSSColor(backBackgroundFooter), 
      }} 
    >
      {children}
    </footer> 
  );
};

export default Footer;