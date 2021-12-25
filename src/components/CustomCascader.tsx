import { Cascader } from "antd";
import { CascaderOptionType, CascaderValueType } from "antd/lib/cascader";
import { FunctionComponent } from "react";
import { ArrowDownOutlined } from '@ant-design/icons';
import { useActions } from "../hooks/useActions";
import { CascaderTypes } from "../types/customCascaderTypes";
import CanvasAPI from "../backendAPI/CanvasAPI";
import { useHistory } from "react-router-dom";

interface CustomCascaderProps {
  defaultValue: string
  options: CascaderOptionType[]
  setCallback?: any
  clearCallback?: any
  typeCascader?: CascaderTypes
  index?: number
}




function filter(inputValue: string, path: CascaderOptionType[] | any): boolean {
  return path.some((option: any) => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
}


const CustomCascader: FunctionComponent<CustomCascaderProps> = ({
  defaultValue,
  options,
  typeCascader,
  index
}: CustomCascaderProps) => {
  const history = useHistory();
  const {
    removeClientOrderCreation,
    removePriceOrderCreation,
    setClientOrderCreation,
    setPriceOrderCreation,
    setRawMaterialNameOC,
    removeRawMaterialName,
    selectClientVO,
    selectNewItemVO,
    selectClientForCanvas,
    fetchCanvas,
    getClientsCanvas
  } = useActions();

  const sendResponse= async(value : number)=>{
    try {
      fetchCanvas(true);
      const clientData = await CanvasAPI.clientsData(value); 
      if (clientData ===401) {
        return history.goBack();
      }
      getClientsCanvas(clientData);
    } catch (error) {
      console.log(error);

    } finally{
      fetchCanvas(false);

    }
      
      // fetch OFF

    
  };

  function onChange(value: CascaderValueType, selectedOptions: CascaderOptionType[] | undefined) {
    if (selectedOptions !== undefined) {
      switch (typeCascader) {
        case CascaderTypes.SET_CLIENT_ORDER_CREATION:
          if (selectedOptions[0] === undefined) return removeClientOrderCreation();
          return setClientOrderCreation(value[0], selectedOptions[0].label);
        case CascaderTypes.SET_PRICE_ORDER_CREATION:
          if (selectedOptions[0] === undefined) return removePriceOrderCreation();
          return setPriceOrderCreation(value[0], selectedOptions[0].label);
        case CascaderTypes.SET_MATERIAL:
          if (selectedOptions[0] === undefined) return removeRawMaterialName(index as number);
          return setRawMaterialNameOC(selectedOptions[0].label, index, value[0],);
        case CascaderTypes.SET_ORDER_VIEW:
          if (selectedOptions[0] === undefined) return selectClientVO(null);
          return selectClientVO({ id: value[0] as number, name: selectedOptions[0].label as string });
          case CascaderTypes.ADD_NEW_PRICE_ITEM:
            if (selectedOptions[0] === undefined) return selectNewItemVO( null,  '', index as number);
            return selectNewItemVO( value[0] as number,  selectedOptions[0].label as string, index as number );
        case CascaderTypes.SET_CLIENT_GRAPH:
          if (selectedOptions[0] === undefined) return selectClientForCanvas(0,  '');
          selectClientForCanvas(value[0] as number,  selectedOptions[0].label as string);
          return sendResponse(value[0] as number);
          // {
          //   setClientOrderCreation(value[0], selectedOptions[0].label)//!!
          // }
        default:
          break;
      }
    }
  }


  return (
    <Cascader
      options={options}
      onChange={onChange}
      placeholder="Please select..."
      showSearch={{ filter, matchInputWidth: true }}
      changeOnSelect={true}
      defaultValue={[defaultValue]}
      displayRender={label => label.join(' ')}
      notFoundContent={'Таков нетъ'}
      suffixIcon={<ArrowDownOutlined />}
      value={[defaultValue]}
    />
  );
};

export default CustomCascader;


