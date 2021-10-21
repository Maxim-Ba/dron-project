import { MinusCircleOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import { CSSProperties, FunctionComponent, useState } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import CustomCascader from "../CustomCascader";
import CustomInput from "../CustomInput";
import { redColor, customStyleButton } from '../../custom-styles-for-antd/styleVariables'

interface RawMaterialItemProps {
  index: number
}


const RawMaterialItem: FunctionComponent<RawMaterialItemProps> = ({ index }: RawMaterialItemProps) => {
  
  const { removeRawMaterial } = useActions()

  const rawMaterialList = useTypedSelector(state => state.orderCreation.rawMaterialList)

  const [isVisible, setIsVisible] = useState(false)

  const styleDeleteButton: CSSProperties = {
    ...customStyleButton.style,
    ...redColor,
    visibility: isVisible && rawMaterialList.length > 1
      ? 'visible'
      : 'hidden'
  }

  const handleClick = () => {
    removeRawMaterial(index)
  }

  return (
    <div
      className="raw-material-item"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <CustomCascader defaultValue={''} />
      <CustomInput />
      <Button
        shape={"circle"}
        style={styleDeleteButton}
        icon={<MinusCircleOutlined />}
        className="raw-material-item__delete-btn"
        onClick={handleClick}
      />
    </div>
  )
};

export default RawMaterialItem;