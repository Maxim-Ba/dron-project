import { Button, Col, Row } from "antd";
import { FunctionComponent, useEffect } from "react";
import { Redirect, useHistory } from "react-router";
import CanvasAPI from "../../backendAPI/CanvasAPI";
import clientsAPI from "../../backendAPI/clientsAPI";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { customButtonsStyleType } from "../../types/buttonTypes";
import { CascaderTypes } from "../../types/customCascaderTypes";
import { routesEnum } from "../../types/routes";
import { useGenerateOptionCascaderClient } from "../../utils/generateOptionCascader";
import { groupSumByMounth } from "../../utils/groupSumByMounth";
import Canvas from "../Canvas";
import CustomCascader from "../CustomCascader";
import Header from "../Header/Header";

interface GraphProps {

}

const Graph: FunctionComponent<GraphProps> = () => {

  const history = useHistory();
  const { selectedClient, allData, client } = useTypedSelector(state => state.canvasReducer);
  const { getClients, getAllCanvas, fetchCanvas, selectClientForCanvas, logout } = useActions();
  const { id } = useTypedSelector(state => state.user);

  const handleGetClients = async () => {
    try {
      fetchCanvas(true);
      const responseClient = await clientsAPI.getClients();
      if (responseClient === 401) {
        logout();
        return history.goBack();
      }
      getClients(responseClient);
    } catch (error) {
      history.goBack();
    } finally {
      fetchCanvas(false);
    }

  };

  const handleGetAll = async () => {
    try {
      fetchCanvas(true);
      const dataAll = await CanvasAPI.getAll();
      if (dataAll === 401) {
        logout();
        return history.goBack();
      }
      getAllCanvas(dataAll);
    } catch (error) {

    } finally {
      fetchCanvas(false);
    }
  };

  useEffect(() => {
    handleGetClients();
    return () => {
      fetchCanvas(false);
      selectClientForCanvas(0, '');
    };
  }, []);

  return (
    <>
      {!id && <Redirect to={routesEnum.LOGIN} />}


      <Header buttonName={customButtonsStyleType.graph} />
      <div className="admin">

        <Row
          justify="center"
          gutter={10}
        >
          <Col>
            <Button
              block
              shape='round'
              type='default'
              onClick={handleGetAll}
            >
              Все заказы
            </Button>
          </Col>
          <Col>
            <CustomCascader
              defaultValue={selectedClient.name}
              options={useGenerateOptionCascaderClient()}
              typeCascader={CascaderTypes.SET_CLIENT_GRAPH}
            />
          </Col>
        </Row>

        {(!!allData.length || !!client.length) && <Canvas allData={groupSumByMounth(allData)} client={groupSumByMounth(client)} />}

      </div>
    </>
  );
};

export default Graph;