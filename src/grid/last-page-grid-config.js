import { CellAlign, CellScale } from '@armathai/pixi-grid';
import { FillStyle } from 'pixi.js';


export function LP(l, p) {
    return window.innerWidth > window.innerHeight ? l : p;
}

export function lastPageGridConfig() {
    return LP(
        {
            // debug: {
            //     color: 0xff0000,
            // },
            name: 'main',
            bounds: { x: 0, y: 0, width: window.innerWidth, height: window.innerHeight },
            cells: [
                {
                    name: 'logo',
                    bounds: { x: 0.35, y: 0.2, width: 0.35, height: 0.2 },

                },
                {
                    name: 'd2',
                    bounds: { x: -0.215, y: 0.12, width: 0.55, height: 0.33 },
                    align: CellAlign.rightTop
                },
                {
                    name: 'd4',
                    bounds: { x: -0.215, y: 0.525, width: 0.55, height: 0.33 },
                    align: CellAlign.rightTop

                },
                {
                    name: 'd1',
                    bounds: { x: 0.703, y: 0.12, width: 0.55, height: 0.33 },
                    align: CellAlign.leftTop

                },
                {
                    name: 'd3',
                    bounds: { x: 0.703, y: 0.525, width: 0.55, height: 0.33 },
                    align: CellAlign.leftTop

                },
                {
                    name: 'bg',
                    bounds: { x: 0, y: 0.88, width: 1, height: 0.13 },
                    scale: CellScale.fill,

                },
                {
                    name: 'text',
                    bounds: { x: 0, y: 0.91, width: 1, height: 0.05 },
                    align: CellAlign.center
                }
            ]
        },
        {
            debug: {
                color: 0xff0000,
            },
            name: 'main',
            bounds: { x: 0, y: 0, width: window.innerWidth, height: window.innerHeight },
            cells: [
                {
                    name: 'd1',
                    bounds: { x: 0, y: 0.125, width: 1, height: 0.2 },
                }
            ]
        },
    );
}