import { Modal } from "antd";
import { FunctionComponent, ReactNode, useEffect } from "react";
import clientsAPI from "../../../backendAPI/clientsAPI";
import OrderAPI from "../../../backendAPI/OrderAPI";
import priceAPI from "../../../backendAPI/priceAPI";
import rawMaterialAPI from "../../../backendAPI/rawMaterialAPI";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { rawMaterial } from "../../../types/editRawMaterialsTypes";
import { TypeMV, TypesofMW } from "../../../types/ModalWindowTypes/ModalWindowTypes";

interface ModlWindowProps {
  children: ReactNode,
  title: string,
  type: TypeMV
}

const ModlWindow: FunctionComponent<ModlWindowProps> = ({ children, title, type }) => {

  const { setVisibleMW, setConfirmLoadingMW, getClients,
    setClientNames, setClientINN, setClientPhone,
    setClientNamesForChange, setClientINNForChange, setClientPhoneForChange,
    getRawMaterials,
    setMaterialName, setMaterialUnit, selectMaterial,
    getPriceNames, setNameForCreation, readyForDeletePrice, selectPriceNames,  readyForChangePrice,
    resetNewItems, toggleFetchVO,setOnLeftOrderViev
  } = useActions();
  const { confirmLoading, visible } = useTypedSelector(state => state.modalWindow);
  const { name, phone, inn } = useTypedSelector(state => state.clients.formFields);

  const { name: nameMaterial, units } = useTypedSelector(state => state.rawMaterials.creationFields);
  const { readyForDelete: readyForDeleteMaterial, materialSelected, valuesForChange } = useTypedSelector(state => state.rawMaterials);

  const { fieldForCreationPrice, redyForDeletePrice, selectedPrice, readyForChange, arrayForChange } = useTypedSelector(state => state.price);


  const { name: nameForChange, phone: phoneForChange, inn: innForChange, id } = useTypedSelector(state => state.clients.selectedClientsFields);
  const { readyForDelete } = useTypedSelector(state => state.clients);
  const { newPriceItems, selectToDeletePriceItem, editedPriceItems, selectedOrder} = useTypedSelector(state => state.viewOrder);
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
        case TypesofMW.RAW_MATERIALS_CREATE:
          if (nameMaterial && units) {
            const materials = await rawMaterialAPI.createRawMaterials(nameMaterial, units);
            if (materials.name === "error") {
              alert(materials.detail || "Ошибка");
              break;
            }
            getRawMaterials(materials);
            setVisibleMW(false);
            setMaterialName('');
            setMaterialUnit(null);
          }
          break;
        case TypesofMW.RAW_MATERIALS_DELETE:
          if (materialSelected) {
            const materials = await rawMaterialAPI.deleteRawMaterials(materialSelected);
            if (materials.name === "error") {
              alert(materials.detail || "Ошибка");
              break;
            }
            getRawMaterials(materials);
            setVisibleMW(false);
            selectMaterial(null);
          }
          break;
        case TypesofMW.RAW_MATERIALS_CHANGE:

          if (valuesForChange) {
            console.log(valuesForChange, 'valuesForChange');

            const materials = await rawMaterialAPI.changeRawMaterials(valuesForChange as rawMaterial);
            if (materials.name === "error") {
              alert(materials.detail || "Ошибка");
              break;
            }
            getRawMaterials(materials);
            setVisibleMW(false);
          }
          break;
        case TypesofMW.PRICE_CREATE:
          if (fieldForCreationPrice) {
            const newPriceNames = await priceAPI.createPrice(fieldForCreationPrice);
            if (newPriceNames.name === "error") {
              alert(newPriceNames.detail || "Ошибка");
              break;
            }
            getPriceNames(newPriceNames);
            setVisibleMW(false);
            setNameForCreation('');
          }
          break;
        case TypesofMW.PRICE_DELETE:
          if (selectedPrice) {
            const priceNmaes = await priceAPI.deletePriceName(selectedPrice);
            if (priceNmaes.name === "error") {
              alert(priceNmaes.detail || "Ошибка");
              break;
            }
            getPriceNames(priceNmaes);
            setVisibleMW(false);
            readyForDeletePrice(false);
            selectPriceNames(null);
          }
          break;
        case TypesofMW.PRICE_CHANGE:
          if (arrayForChange) {
            const price = await priceAPI.changePrice(arrayForChange);
            if (price.name === "error") {
              alert(price.detail || "Ошибка");
              break;
            }
            selectPriceNames(null);
            readyForChangePrice(false);
            setVisibleMW(false);
          }
          break;
        case TypesofMW.ORDER_CHANGE:
          if (!!newPriceItems.length || !!selectToDeletePriceItem.length|| !!editedPriceItems.length) {
            const orderResponse = await OrderAPI.editOrder({newPriceItems,selectToDeletePriceItem,editedPriceItems, selectedOrder});
            if (orderResponse.name === "error") {
              alert(orderResponse.detail || "Ошибка");
              break;
            }
            resetNewItems();
            setVisibleMW(false);
            setOnLeftOrderViev();
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
    switch (type) {
      case TypesofMW.CLIENT_CREATE:
        setClientNames('');
        setClientINN(null);
        setClientPhone(null);
        setVisibleMW(false);
        break;
      case TypesofMW.RAW_MATERIALS_CREATE:
        setMaterialName('');
        setMaterialUnit(null);
        setVisibleMW(false);
        break;
      case TypesofMW.PRICE_CREATE:
        setNameForCreation('');
        setVisibleMW(false);
        break;
        case TypesofMW.ORDER_CHANGE:
          resetNewItems();
          setVisibleMW(false);
          toggleFetchVO(false);

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
      case TypesofMW.RAW_MATERIALS_CREATE:
        return { disabled: !nameMaterial && !units };
      case TypesofMW.RAW_MATERIALS_DELETE:
        return { disabled: !readyForDeleteMaterial };
      case TypesofMW.PRICE_CREATE:
        return { disabled: !fieldForCreationPrice };
      case TypesofMW.PRICE_DELETE:
        return { disabled: !redyForDeletePrice };
      case TypesofMW.PRICE_CHANGE:
        return { disabled: !readyForChange };
        case TypesofMW.ORDER_CHANGE:
          return { disabled: 
            !(!!newPriceItems.length ||
            !!selectToDeletePriceItem.length  || 
            !!editedPriceItems.length)  
          };
      default:
        return undefined;
    }
  };

  useEffect(() => {

    return () => {

      setVisibleMW(false);
    };

  }, []);


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