import { FunctionComponent, useEffect, useRef } from "react";

interface CanvasProps {
  allData: any[],
  client: any[]
}



const Canvas: FunctionComponent<CanvasProps> = ({ allData, client }) => {

  const getXAxisPoinAmount = (data: any[]) => {
    const set = new Set();
    for (const element of data) {
      for (const [x,] of element) {
        set.add(x);
      }
    }
    return set.size;
  };
  
  const [yMin, yMax] = computeBoundaries({ allData, client });
  const [xMin, xMax] = computeBoundariesX({ allData, client });
  const newAllData = addXPoints(allData);
  const newClient = addXPoints(client);
  const xPoinAmount = getXAxisPoinAmount([newAllData, newClient]);

  const WIDTH = xPoinAmount * 80 - 10;
  const HEIGTH = window.innerWidth * .7;
  const DPI_WIDTH = WIDTH * 2;
  const DPI_HEIGTH = HEIGTH * 2;
  const ROWS_COUNT = 5;
  const VIEW_WIDTH = DPI_WIDTH;
  const PADDING = 25;
  const VIEW_HEIGTH = DPI_HEIGTH - PADDING * 2;


  const yRatio = VIEW_HEIGTH / (yMax - yMin);
  const xRatio = ((VIEW_WIDTH / xPoinAmount) - 2);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvas = canvasRef.current;
  const ctx = canvas?.getContext('2d');

  const reRenderCanvas = () => {
    ctx?.clearRect(0, 0, DPI_WIDTH, DPI_HEIGTH);
  };

  const chart = (data: any[]) => {
    if (canvas) {
      if (ctx) {
        yAxis(ctx);
        xAxis(ctx, !!data[0].length ? data[0] : data[1]);
        data.forEach((element: any[], i: number) => {
          const coords = element.map(toCoords);
          line(coords, !!i ? '#F34C44' : '#80ff80');
        });

      }
    }
  };
  function addXPoints(array: any) {
    if (!array.length) {
      return array;
    }
    const allXPoints: any[] = [];
    for (
      let i = xMin;
      i <= xMax;
      i = inctemrntMounth(i)
    ) {
      allXPoints.push(i);

    }
    const obj: any = {};
    for (const x of allXPoints) {
      obj[x] = 0;
    }

    const result = [];
    array.forEach((element: any[]) => {
      obj[element[0]] = element[1];
    });
    for (let prop in obj) {
      result.push([parseInt(prop), obj[prop]]);
    }
    result.sort((a: any, b: any) => a[0] - b[0]);
    return result;

  }
  function inctemrntMounth(value: any) {
    const newValueDate = new Date(value);
    const currentMounth = newValueDate.getMonth();
    return newValueDate.setMonth(currentMounth + 1);
  }
  function toCoords(coord: number[], index: number) {
    return [
      Math.floor(index * xRatio),
      Math.floor(DPI_HEIGTH - PADDING - coord[1] * yRatio)
    ];
  }

  function yAxis(ctx: CanvasRenderingContext2D) {
    const textStep = (yMax - yMin) / ROWS_COUNT;
    const step = VIEW_HEIGTH / ROWS_COUNT;
    ctx.beginPath();
    ctx.strokeStyle = '#bbb';
    ctx.font = 'normal 20px Helvetica, sans-serif';
    for (let i = 1; i <= ROWS_COUNT; i++) {
      const y = step * i;
      const text = Math.round(yMax - textStep * i);
      ctx.fillText(text.toString(), 5, y + PADDING - 10);
      ctx.moveTo(0, y + PADDING);
      ctx.lineTo(DPI_WIDTH, y + PADDING);
    }
    ctx.stroke();
    ctx.closePath();
  };

  function xAxis(ctx: CanvasRenderingContext2D, data: any[]) {

    ctx.beginPath();
    ctx.strokeStyle = '#bbb';
    for (let i = 0; i < xPoinAmount; i++) {
      const x = i * xRatio;
      const text = new Intl.DateTimeFormat('ru-RU', { month: 'short' }).format(new Date(data[i][0])) + ' ' + new Date(data[i][0]).getFullYear();
      ctx.fillText(text.toString(), x, DPI_HEIGTH - 5);
    }
    ctx.stroke();
    ctx.closePath();
  };

  function line(coords: any[], color: string) {
    if (ctx) {
      ctx.beginPath();
      ctx.lineWidth = 4;
      ctx.strokeStyle = color;
      for (const [x, y] of coords) {
        ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.closePath();
    }
  }

  function computeBoundaries(data: { allData: any[], client: any[] }) {
    let max = 0, min = 0;
    if (!!data.allData.length) {
      for (const [, y] of data.allData) {
        if (max < y) max = y;
        if (min > y) min = y;
      }
    }
    if (!!data.client.length) {
      for (const [, y] of data.client) {
        if (max < y) max = y;
        if (min > y) min = y;
      }
    }
    return [min, max];
  };

  function computeBoundariesX(data: { allData: any[], client: any[] }) {
    let max = 0, min = !!data.allData.length ? data.allData[0][0] : data.client[0][0];
    if (!!data.allData.length) {
      for (const [x,] of data.allData) {
        if (max < x) max = x;
        if (min > x) min = x;
      }
    }
    if (!!data.client.length) {
      for (const [x, y] of data.client) {
        if (max < x) max = x;
        if (min > x) min = x;
      }
    }
    return [min, max];
  };

  useEffect(() => {
    chart([newAllData, newClient]);
    return () => {
      reRenderCanvas();
    };
  }, [allData, client]);

  useEffect(() => {
    return () => {
      reRenderCanvas();
    };
  }, []);
  return (
    <div
      className="canvas-wrapper"
    >
      <canvas
        ref={canvasRef}
        width={DPI_WIDTH} height={DPI_HEIGTH}
        className="canvas"
        style={{ width: WIDTH, height: HEIGTH }}
      >
      </canvas>
    </div>

  );
};

export default Canvas;