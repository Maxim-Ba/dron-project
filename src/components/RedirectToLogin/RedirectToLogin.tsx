import { FunctionComponent } from "react";
import { Redirect } from "react-router";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { routesEnum } from "../../types/routes";

interface RedirectToLoginProps {
  
}

const RedirectToLogin: FunctionComponent<RedirectToLoginProps> = () => {

  const { id } = useTypedSelector(state => state.user);


  return ( 
  <>
      {!id && <Redirect to={routesEnum.LOGIN} />}

  </>

  );
};

export default RedirectToLogin;