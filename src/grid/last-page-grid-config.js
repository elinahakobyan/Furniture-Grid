import { CellAlign, CellScale } from '@armathai/pixi-grid';
import { FillStyle } from 'pixi.js';


export function LP(l, p) {
    return window.innerWidth > window.innerHeight ? l : p;
}

export function lastPageGridConfig() {
    return LP(
        {
            debug: {
                color: 0xff0000,
            },
            name: 'main',
            bounds: { x: 0, y: 0, width: window.innerWidth, height: window.innerHeight },
            cells: [
                {
                    name: 'logo',
                    bounds: { x: 0.3, y: 0.22, width: 0.39, height: 0.2 },

                },
                {
                    name: 'd2',
                    bounds: { x: -0.215, y: 0.22, width: 0.5, height: 0.28 },
                    align: CellAlign.rightTop
                },
                {
                    name: 'd4',
                    bounds: { x: -0.215, y: 0.525, width: 0.5, height: 0.28 },
                    align: CellAlign.rightTop

                },
                {
                    name: 'd1',
                    bounds: { x: 0.703, y: 0.22, width: 0.5, height: 0.28 },
                    align: CellAlign.leftTop

                },
                {
                    name: 'd3',
                    bounds: { x: 0.703, y: 0.525, width: 0.5, height: 0.28 },
                    align: CellAlign.leftTop

                },
                {
                    name: 'bg',
                    bounds: { x: 0, y: 0.88, width: 1, height: 0.13 },
                    scale: CellScale.fill,

                },
                {
                    name: 'text',
                    bounds: { x: 0.25, y: 0.91, width: 0.5, height: 0.05 },
                },
                {
                    name: 'redButton',
                    bounds: { x: 0.3, y: 0.49, width: 0.39, height: 0.17 }

                },
                {
                    name: 'blueButton',
                    bounds: { x: 0.4, y: 0.67, width: 0.2, height: 0.1 }
                }

            ]
        },
        {
            // debug: {
            //     color: 0xff0000,
            // },
            name: 'main',
            bounds: { x: 0, y: 0, width: window.innerWidth, height: window.innerHeight },
            cells: [
                {
                    name: 'logo',
                    bounds: { x: 0.2, y: 0.02, width: 0.6, height: 0.15 },
                    // padding: 0.1,
                },

                {
                    name: 'd1',
                    bounds: { x: -0.255, y: 0.31, width: 0.75, height: 0.23 },
                    align: CellAlign.rightTop
                },
                {
                    name: 'd3',
                    bounds: { x: -0.255, y: 0.57, width: 0.75, height: 0.23 },
                    align: CellAlign.rightTop

                },
                {
                    name: 'd2',
                    bounds: { x: 0.55, y: 0.31, width: 0.75, height: 0.23 },
                    align: CellAlign.leftTop

                },
                {
                    name: 'd4',
                    bounds: { x: 0.55, y: 0.57, width: 0.75, height: 0.23 },
                    align: CellAlign.leftBottom

                },
                {
                    name: 'bg',
                    bounds: { x: 0, y: 0.19, width: 1, height: 0.09 },
                    scale: CellScale.fill,

                },
                {
                    name: 'text',
                    bounds: { x: 0.15, y: 0.21, width: 0.7, height: 0.05 },
                    align: CellAlign.center
                },
                {
                    name: 'redButton',
                    bounds: { x: 0.3, y: 0.81, width: 0.4, height: 0.1 }

                },
                {
                    name: 'blueButton',
                    bounds: { x: 0.3, y: 0.92, width: 0.4, height: 0.06 }
                }
            ]
        },
    );
}