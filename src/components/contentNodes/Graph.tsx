import { FunctionComponent } from "react";
import { Redirect } from "react-router";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { customButtonsStyleType } from "../../types/buttonTypes";
import { routesEnum } from "../../types/routes";
import Header from "../Header/Header";

interface GraphProps {
  
}

const Graph: FunctionComponent<GraphProps> = () => {

  const {id} = useTypedSelector(state => state.user);

  return ( 
  <>
      {!id&&<Redirect to={routesEnum.LOGIN}/>}


    <Header buttonName={customButtonsStyleType.graph} />
    <div className="admin">
      Tут будет графики или диаграммы по БД
    </div>
    </> 
    );
};

export default Graph;