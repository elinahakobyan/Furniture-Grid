import { CellAlign, CellScale } from '@armathai/pixi-grid';
import { FillStyle } from 'pixi.js';


export function LP(l, p) {
  return window.innerWidth > window.innerHeight ? l : p;
}

export function mainGridConfig() {
  return LP(
    {
      // debug: {
      //   color: 0xff0000,
      // },
      name: 'page1',
      bounds: { x: 0, y: 0, width: window.innerWidth, height: window.innerHeight },
      cells: [
        {
          name: 'logo',
          bounds: { x: 0, y: 0.125, width: 1, height: 0.2 },
          // padding: 0.1,
        },
        {
          name: 'table1',
          bounds: { x: 0.05, y: 0.37, width: 0.4, height: 0.37 }
        },
        {
          name: 'header1',
          bounds: { x: 0.157, y: 0.75, width: 0.18, height: 0.05 }
        },
        {
          name: 'description1',
          bounds: { x: 0.157, y: 0.81, width: 0.18, height: 0.04 }
        },
        {
          name: 'table2',
          bounds: { x: 0.55, y: 0.37, width: 0.4, height: 0.37 }
        },
        {
          name: 'header2',
          bounds: { x: 0.657, y: 0.75, width: 0.18, height: 0.05 }
        },
        {
          name: 'description2',
          bounds: { x: 0.657, y: 0.81, width: 0.18, height: 0.04 }
        },
        {
          name: 'bg',
          bounds: { x: 0, y: 0.87, width: 1, height: 0.13 },
          scale: CellScale.fill,

        },
        {
          name: 'text',
          bounds: { x: 0, y: 0.91, width: 1, height: 0.05 },
          align: CellAlign.center
        }

      ],

    },
    {
      // debug: {
      //   color: 0xff0000,
      // },
      name: 'page1',
      bounds: { x: 0, y: 0, width: window.innerWidth, height: window.innerHeight },
      cells: [
        {
          name: 'logo',
          bounds: { x: 0.1, y: 0.02, width: 0.8, height: 0.2 },
          // padding: 0.1,
        },
        {

          // debug: {
          //   color: 0x000000,
          // },
          name: 'table1',
          bounds: { x: 0, y: 0.34, width: 1, height: 0.2 }
        },
        {
          name: 'header1',
          bounds: { x: 0, y: 0.55, width: 1, height: 0.03 }
        },
        {
          name: 'description1',
          bounds: { x: 0, y: 0.59, width: 1, height: 0.03 }
        },
        {
          name: 'table2',
          bounds: { x: 0, y: 0.65, width: 1, height: 0.2 }
        },
        {
          name: 'header2',
          bounds: { x: 0, y: 0.86, width: 1, height: 0.04 }
        },
        {
          name: 'description2',
          bounds: { x: 0, y: 0.9, width: 1, height: 0.03 }
        },
        {
          name: 'bg',
          bounds: { x: 0, y: 0.23, width: 1, height: 0.1 },
          scale: CellScale.fill,

        },
        {
          name: 'text',
          bounds: { x: 0.15, y: 0.256, width: 0.7, height: 0.05 },
          align: CellAlign.center
        }

      ],

    },

  );
}

