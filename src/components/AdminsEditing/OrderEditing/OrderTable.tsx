import { PlusCircleOutlined, StopOutlined } from '@ant-design/icons';
import { Table, Input, Button, Popconfirm, Form, Row, Col, Divider, Spin } from 'antd';
import React, { FunctionComponent, useContext, useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import rawMaterialAPI from '../../../backendAPI/rawMaterialAPI';
import { customStyleButton } from '../../../custom-styles-for-antd/styleVariables';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { CascaderTypes } from '../../../types/customCascaderTypes';
import { IMaterialList, IOrder } from '../../../types/dataColumn';
import { useGenerateOptionCascaderRawMaterials } from '../../../utils/generateOptionCascader';
import CustomCascader from '../../CustomCascader';





interface OrderTableProps {
  data: IMaterialList[],
  date?: string | DateConstructor,
  orderId: number
}

const { type } = customStyleButton;


const OrderTable: FunctionComponent<OrderTableProps> = ({ data, date, orderId }) => {
  const rawMaterialsNames = useGenerateOptionCascaderRawMaterials();;
  const { changeAmount, setToDeletePriceItem, getRawMaterials, addNewPriceItem, toggleFetchVO, changeNewAmount, pushToEditItems } = useActions();
  const { selectToDeletePriceItem, newPriceItems, isFetch, selectedOrder } = useTypedSelector(state => state.viewOrder);
  const history = useHistory();


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, priceId:number) => {
    const amountToNumber = Number.parseInt(e.target.value);
    changeAmount(priceId, amountToNumber);
    pushToEditItems(priceId);
  };

  const handleClick = (id: number) => {
    setToDeletePriceItem(id);
  };

  const handleAdd = () => {
    addNewPriceItem({
      amount: 0,
      rawMaterialId: 0,
      name: ''
    });
  };
  const handleChangeNewAmount = (e: React.ChangeEvent<HTMLInputElement>, index:number) => {
    const amountToNumber = Number.parseInt(e.target.value);

    changeNewAmount(index, amountToNumber);
  };
  const handleGetRawMaterials = async () => {
    toggleFetchVO(true);

    const materials = await rawMaterialAPI.getRawMaterials();
    if (materials === 401) {
      return history.goBack();
    }
    getRawMaterials(materials);
    toggleFetchVO(false);

  };

  useEffect(() => {
    handleGetRawMaterials();

    return () => {
      toggleFetchVO(false);
    };
  }, []);

  return (
    <>
      <div className='orderTable'>Дата: {date}</div>
      {data.map((rawMaterial,index) => {
        return (
          <div
            key={rawMaterial.rawMaterialId}
            style={{ margin: '0 -15px' }}
          >
            <Divider orientation="left">{rawMaterial.rawMaterial}</Divider>

            <Row
              gutter={2}
              style={{
                backgroundColor: selectToDeletePriceItem.includes(rawMaterial.rawMaterialId)
                  ? 'rgba(255,0,0,0.5)'
                  : 'inherit',
                padding: 3,
                borderRadius: '7px'
              }}
            >
              <Col span={10}>
                <Input
                  value={ selectedOrder?.materialList[index].amount as number}
                  type={'number'}
                  min="0"
                  size='small'
                  onChange={e => handleChange(e, rawMaterial.rawMaterialId)}
                  required
                  addonBefore={'Кол-во:'}

                />
              </Col>

              <Col span={10}>
                <Input
                  value={selectedOrder?.materialList[index].amount ?(rawMaterial.priceByOne * (selectedOrder?.materialList[index].amount as number)) + " р." : 0}
                  size='small'
                  min="0"
                  addonBefore={'Итог:'}
                  disabled
                />

              </Col>
              <Col span={3}>
                <Button
                  shape='round'
                  size='small'
                  icon={<StopOutlined />}
                  style={{ backgroundColor: 'red', border: 'none' }}
                  onClick={() => handleClick(rawMaterial.rawMaterialId)}
                />
              </Col>
            </Row>
          </div>

        );
      })}
      {newPriceItems.length !== 0 &&
        newPriceItems.map((item, index) => {
          return (
            <div
              key={index}
              className='new-price-item'
            >
              <Row gutter={2}>
                <Col span={10}>
                  <CustomCascader
                    index={index}
                    defaultValue={item.name}
                    options={rawMaterialsNames}
                    typeCascader={CascaderTypes.ADD_NEW_PRICE_ITEM}
                  />
                </Col>
                <Col span={10}>
                  <Input
                    value={newPriceItems[index].amount}
                    type={'number'}
                    min="0"
                    onChange={e => handleChangeNewAmount(e, index)}
                    required
                    addonBefore={'Кол-во:'}
                  />
                </Col>
              </Row>
            </div>
          );
        })
      }
      <Spin className="add-button add-button_edit-order"
        spinning={isFetch} tip="Loading...">
        <Button
          icon={<PlusCircleOutlined />}
          type={type}
          shape={'circle'}
          className="add-button add-button_edit-order"
          onClick={() => handleAdd()}
          disabled={isFetch}
        />
      </Spin>

    </>

  );
};

export default OrderTable;