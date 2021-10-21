import { FunctionComponent } from "react";
import { customButtonsStyleType } from "../../types/buttonTypes";
import Header from "../Header/Header";

interface OptionsProps {
  
}

const Options: FunctionComponent<OptionsProps> = () => {
  return ( 
<>
<Header buttonName={customButtonsStyleType.options} />
<div className="admin">Tут будет изменение шрифтов, цветов и фона</div>
</>
  );
};

export default Options;