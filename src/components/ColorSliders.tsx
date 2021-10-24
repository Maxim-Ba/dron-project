import { Col, InputNumber, Row, Slider } from "antd";
import React, { FunctionComponent, useEffect, useRef } from "react";

interface ColorSlidersProps {
  red: number
  green: number
  blue: number
  callback: any
}

const ColorSliders: FunctionComponent<ColorSlidersProps> = ({ blue, green, red, callback }: ColorSlidersProps) => {





  return (
    <>
      <Row>
        <Col span={16}>
          <Slider
            className="slider_red"
            min={0}
            max={255}
            onChange={n => callback(n, green, blue)}
            value={typeof red === 'number' ? red : 0}
          />
        </Col>
        <Col span={4}>
          <InputNumber
            min={0}
            max={255}
            style={{ margin: '0 5px' }}
            value={typeof red === 'number' ? red : 0}
            onChange={n => callback(n, green, blue)}
          />
        </Col>
      </Row>

      <Row>
        <Col span={16}>
          <Slider
            className="slider_green"
            min={0}
            max={255}
            onChange={n => callback(red, n, blue)}
            value={typeof green === 'number' ? green : 0}
          />
        </Col>
        <Col span={4}>
          <InputNumber
            min={0}
            max={255}
            style={{ margin: '0 5px' }}
            value={typeof green === 'number' ? green : 0}
            onChange={n => callback(red, n, blue)}
          />
        </Col>
      </Row>

      <Row>
        <Col span={16}>
          <Slider
            min={0}
            max={255}
            onChange={n => callback(red, green, n)}
            value={typeof blue === 'number' ? blue : 0}
          />
        </Col>
        <Col span={4}>
          <InputNumber
            min={0}
            max={255}
            style={{ margin: '0 5px' }}
            value={typeof blue === 'number' ? blue : 0}
            onChange={n => callback(red, green, n)}
          />
        </Col>
      </Row>
    </>


  );
};

export default ColorSliders;