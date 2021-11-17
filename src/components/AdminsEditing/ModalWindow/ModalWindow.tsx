import { Modal } from "antd";
import { FunctionComponent, ReactNode, useEffect } from "react";
import clientsAPI from "../../../backendAPI/clientsAPI";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { TypeMV, TypesofMW } from "../../../types/ModalWindowTypes/ModalWindowTypes";

interface ModlWindowProps {
  children: ReactNode,
  title: string,
  type: TypeMV
}

const ModlWindow: FunctionComponent<ModlWindowProps> = ({ children, title, type }) => {

  const { setVisibleMW, setConfirmLoadingMW, getClients,
    setClientNames, setClientINN, setClientPhone,
    setClientNamesForChange, setClientINNForChange, setClientPhoneForChange
  } = useActions();
  const { confirmLoading, visible } = useTypedSelector(state => state.modalWindow);
  const { name, phone, inn } = useTypedSelector(state => state.clients.formFields);
  const { name: nameForChange, phone: phoneForChange, inn: innForChange, id } = useTypedSelector(state => state.clients.selectedClientsFields);
  const { readyForDelete } = useTypedSelector(state => state.clients);

  const fetchData = async () => {
    try {
      switch (type) {
        case TypesofMW.CLIENT_CREATE:
          if (name) {
            const clients = await clientsAPI.createClient(name, inn, phone);
            if (clients.name === "error") {
              alert(clients.detail || "Ошибка");
              break;
            }
            getClients(clients);
            setVisibleMW(false);
            setClientNames('');
            setClientINN(null);
            setClientPhone(null);
          }
          break;
        case TypesofMW.CLIENT_DELETE:
          if (id) {
            const clients = await clientsAPI.deleteClients(id);
            if (clients.name === "error") {
              alert(clients.detail || "Ошибка");
              break;
            }
            getClients(clients);
            setVisibleMW(false);
          }
          break;
        case TypesofMW.CLIENT_CHANGE:
          if (nameForChange) {
            console.log(nameForChange, id);

            const clients = await clientsAPI.editClient(nameForChange, innForChange, phoneForChange as number, id);
            if (clients.name === "error") {
              alert(clients.detail || "Ошибка");
              break;
            }
            getClients(clients);
            setVisibleMW(false);
            setClientNamesForChange('');
            setClientINNForChange(null);
            setClientPhoneForChange(null);
          }
          break;
        default:
          break;
      }
    } catch (error) {
      console.log(error, 'ModlWindow');
    }
    finally {
      setConfirmLoadingMW(false);
    }

  };

  const handleOk = () => {
    setConfirmLoadingMW(true);
    fetchData();
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    switch (type) {
      case TypesofMW.CLIENT_CREATE:
        setClientNames('');
        setClientINN(null);
        setClientPhone(null);
        setVisibleMW(false);
        break;

      default:
        setVisibleMW(false);
    }

  };

  const setOkButtonProps = () => {
    switch (type) {
      case TypesofMW.CLIENT_CREATE:
        return { disabled: !name };
      case TypesofMW.CLIENT_CHANGE:
        return { disabled: !nameForChange };
        case TypesofMW.CLIENT_DELETE:
          return { disabled: !readyForDelete };
      default:
        return undefined;
    }
  };
  useEffect(()=>{
    return ()=>{setVisibleMW(false);};

  },[]);

  return (

    <Modal
      cancelText='Отмена'
      title={title}
      visible={visible}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
      okButtonProps={setOkButtonProps()}
    >
      {children}
    </Modal>

  );
};

export default ModlWindow;