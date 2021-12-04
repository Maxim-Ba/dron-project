import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { FunctionComponent } from "react";
import { customStyleButton } from "../../custom-styles-for-antd/styleVariables";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

interface AddButtonProps {

}

const {type} = customStyleButton;

const AddButton: FunctionComponent<AddButtonProps> = () => {
  const {addRawMaterial} = useActions();
  const {isFetch} = useTypedSelector(state=>state.orderCreation);
  const handleClick=()=>{
    addRawMaterial();
  };
  return (
    <Button  
      type={type}  
      shape={'circle'} 
      className="add-button" 
      icon={<PlusOutlined/>} 
      onClick={handleClick}
      hidden={isFetch}
    >
        
    </Button>
  );
};

export default AddButton;