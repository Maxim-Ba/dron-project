import { FunctionComponent } from "react";
import { customButtonsStyleType } from "../../types/buttonTypes";
import Header from "../Header/Header";

interface GraphProps {
  
}

const Graph: FunctionComponent<GraphProps> = () => {
  return ( 
  <>
    <Header buttonName={customButtonsStyleType.graph} />
    <div className="admin">
      Tут будет графики или диаграммы по БД
    </div>
    </> 
    );
};

export default Graph;