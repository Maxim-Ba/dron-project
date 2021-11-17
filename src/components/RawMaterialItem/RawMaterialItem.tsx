import { MinusCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { CSSProperties, FunctionComponent, useState } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import CustomCascader from "../CustomCascader";
import CustomInput from "../CustomInput";
import { redColor, customStyleButton } from '../../custom-styles-for-antd/styleVariables';
import { CascaderTypes } from "../../types/customCascaderTypes";

interface RawMaterialItemProps {
  index: number
  options:any
}


const RawMaterialItem: FunctionComponent<RawMaterialItemProps> = ({ index, options }: RawMaterialItemProps) => {

  const { removeRawMaterial } = useActions();

  const { rawMaterialList } = useTypedSelector(state => state.orderCreation);
  const currentRawMaterial = rawMaterialList[index];
  const [isVisible, setIsVisible] = useState(false);

  const styleDeleteButton: CSSProperties = {
    ...customStyleButton.style,
    ...redColor,
    visibility: isVisible && rawMaterialList.length > 1
      ? 'visible'
      : 'hidden'
  };

  const handleClickRemoveItem = () => {
    removeRawMaterial(index);
  };


  return (
    <div
      className="raw-material-item"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <CustomCascader
        index={index}
        defaultValue={currentRawMaterial.name}
        options={options}
        typeCascader={CascaderTypes.SET_MATERIAL}
      />
      <CustomInput amount={currentRawMaterial.amount} index={index}  />
      <Button
        shape={"circle"}
        style={styleDeleteButton}
        icon={<MinusCircleOutlined />}
        className="raw-material-item__delete-btn"
        onClick={handleClickRemoveItem}
      />
    </div>
  );
};

export default RawMaterialItem;