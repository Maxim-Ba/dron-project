import { CascaderOptionType } from 'antd/lib/cascader';
import { useTypedSelector } from './../hooks/useTypedSelector';


export function useGenerateOptionCascaderClient():CascaderOptionType[] {
  const { clientList } = useTypedSelector(state => state.clients);

  const options = clientList.map((item)=>({
    value: item.id,
    label: item.name
  }));
  return options;
}

export function useGenerateOptionCascaderPrice():CascaderOptionType[] {
  const { priceNames } = useTypedSelector(state => state.price);

  const options = priceNames.map((item)=>({
    value: item.nameId,
    label: item.name
  }));
  return options;
}

export function useGenerateOptionCascaderRawMaterials():CascaderOptionType[] {
  const  rawMaterialsListFromDB  = useTypedSelector(state => state.rawMaterials.rawMaterialsList);
  const options = rawMaterialsListFromDB.map((item)=>({
    value: item.id,
    label: item.name
  }));
  return options;
}