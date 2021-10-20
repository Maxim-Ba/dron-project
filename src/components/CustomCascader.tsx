import { Cascader } from "antd";
import { CascaderOptionType, CascaderValueType } from "antd/lib/cascader";
import { FunctionComponent } from "react";
import { ArrowDownOutlined } from '@ant-design/icons';

interface CustomCascaderProps {
  defaultValue: string
}
const options: CascaderOptionType[] = [
  {
    value: 'OOO',
    label: 'OOO',
    children: [
      {
        value: 'Заглушка',
        label: 'Hangzhouadsadsasdasdasdasdasdasdasd',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
          {
            value: 'xiasha',
            label: 'Xia Sha',
            disabled: false,
          },
        ],
      },
    ],
  },
  {
    value: 'ИП',
    label: 'ИП',
    children: [
      {
        value: '---',
        label: '----',
        children: [
        ],
      },
    ],
  },
];

function onChange(value: CascaderValueType, selectedOptions: CascaderOptionType[] | undefined) {
  console.log(value, selectedOptions);
}

function filter(inputValue: string, path: CascaderOptionType[] | any): boolean {
  return path.some((option: any) => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
}

const CustomCascader: FunctionComponent<CustomCascaderProps> = ({ defaultValue }: CustomCascaderProps) => {
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
      suffixIcon= {<ArrowDownOutlined />}

    />
  );
};

export default CustomCascader;