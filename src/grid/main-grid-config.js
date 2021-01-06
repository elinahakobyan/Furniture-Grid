import { CellAlign, CellScale } from '@armathai/pixi-grid';

function LP(l, p) {
  return window.innerWidth > window.innerHeight ? l : p;
}

export function mainGridConfig() {
  return LP(
    {
      debug: {
        color: 0xff0000,
      },
      name: 'page1',
      bounds: { x: 0, y: 0, width: window.innerWidth, height: window.innerHeight },
      cells: [
        {
          name: 'logo',
          bounds: { x: 0, y: 0.125, width: 1, height: 0.2 },
          // padding: 0.1,
        },
        {
          name:'table1',
          bounds:{x:0.05,y:0.37,width:0.4,height:0.37}
        },
        {
          name:'header1',
          bounds:{x:0.157,y:0.75,width:0.18,height:0.05}
        },
        {
          name:'description1',
          bounds:{x:0.157,y:0.81,width:0.18,height:0.04}
        },
        {
          name:'table2',
          bounds:{x:0.55,y:0.37,width:0.4,height:0.37}
        },
        {
          name:'header2',
          bounds:{x:0.68,y:0.75,width:0.18,height:0.05}
        },
        {
          name:'description2',
          bounds:{x:0.68,y:0.81,width:0.18,height:0.04}
        },
        {
          name:'bg',
          bounds:{x:0,y:0.87,width:1,height:0.13}
        }
        
      ],
      
    },
    {
      debug: {
        color: 0xff0000,
      },
      name: 'main',
      bounds: { x: 0, y: 0, width: window.innerWidth, height: window.innerHeight },
      cells: [
        {
          name: 'logo',
          bounds: { x: 0, y: 0, width: 1, height: 0.2 },
        },
      ],
    }
  );
}
