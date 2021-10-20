import { FunctionComponent, ReactNode } from "react";

interface FooterProps {
  children?:ReactNode
}

const Footer: FunctionComponent<FooterProps> = ({children}:FooterProps) => {
  return (
    <footer className="footer">
      {children}
    </footer> 
  );
};

export default Footer;