import { Input, Form } from "antd";
import React, { FunctionComponent, useEffect } from "react";
import priceAPI from "../../../backendAPI/priceAPI";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { checkAllvaluesIsNotNull } from "../../../utils/checkAllvaluesIsNotNull";

interface FormChangePriceProps {

}


const FormChangePrice: FunctionComponent<FormChangePriceProps> = () => {
  const { fetchPriceList, setPriceList, arrayForChangePrice, readyForChangePrice } = useActions();

  const { selectedPrice, priceNames, priceList,arrayForChange } = useTypedSelector(state => state.price);


  const fieldList = priceList.map(materialItem => (
    {
      [materialItem.id]: materialItem.coast
    }
  ));


  const [form] = Form.useForm();

  const getPriceByPriceName = async () => {

    if (selectedPrice) {
      const selectedPriceName = priceNames.find(name => name.nameId === selectedPrice);
      if (selectedPriceName) {
        try {
          fetchPriceList(true);
          const materials = await priceAPI.getPrice(selectedPriceName.name);
          setPriceList(materials);
        }
        catch (error) {
          console.log(error, 'getPriceByPriceName');
        }
        finally {
          fetchPriceList(false);
        }
      };
    };
  };

  useEffect(() => {
    getPriceByPriceName();
    return ()=>{readyForChangePrice(false);};    
  }, [selectedPrice]);

  useEffect(() => {
    fieldList.forEach(field=>form.setFieldsValue(field));
    priceList.forEach(priceItem=>readyForChangePrice(!!priceItem.coast && priceItem.coast>0 ));
    
  }, [priceList]);

  return (

    <Form
      form={form}
      layout='vertical'
      labelCol={{ span: 16 }}
      wrapperCol={{ span: 8 }}
      size='small'
      onFieldsChange={(_, allFields) => {
        readyForChangePrice(checkAllvaluesIsNotNull(arrayForChange));
        arrayForChangePrice(allFields.map(field=>({
          coast :  Number.parseInt(field.value),
          id : Number.parseFloat(field.name.toString()),
        })));

      }}
    >
      {priceList.map(materialItem => <Form.Item
        name={materialItem.id}
        label={materialItem.name}
        key={materialItem.rawMaterialId}
        rules={[
          {required: true, message: "должно быть заполнено" },
          {validator: (_, value) => {
            if (value >0) {

              readyForChangePrice(true);
              return Promise.resolve();
            }
            readyForChangePrice(false);
            return Promise.reject(new Error('должно быть больше 0'));
          }
          , message: 'должно быть больше 0'
          },
        ]}

      >
        <Input
          type='number'
          addonAfter="руб."
          addonBefore="Стоимость"
        />
      </Form.Item>
      )}

    </Form>
  );
};

export default FormChangePrice;