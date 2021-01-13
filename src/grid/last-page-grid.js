import { CellAlign, CellScale, PixiGrid } from '@armathai/pixi-grid';
import { lastPageGridConfig } from './last-page-grid-config';
import { lastPage } from './constants'
import { Sofa } from './Sofa'

export class LastPageGrid extends PixiGrid {
    getGridConfig() {
        return lastPageGridConfig();
    }
    constructor() {
        super();
        this._build(lastPage);
    }

    //   rebuild() {
    //     super.rebuild(this.getGridConfig());
    //   }

    _build(page) {
        console.warn(lastPage);
        this.createLogo(page[0])
        this.createSofas(page)
        this.createBg()
    }

    createLogo(page) {
        const sprite = new PIXI.Sprite.from(page.name)
        this.setChild(page.name, sprite)
        // console.warn(sprite.anchor.set(0.5));
    }

    createSofas(page) {
        for (let i = 1; i < 5; i++) {
            const sprite = new Sofa(page[i].name)
            this.setChild(page[i].name, sprite)
        }
    }

    createBg() {
        const sprite = new PIXI.Sprite.from('bg')
        this.setChild('bg', sprite)
        const style = new PIXI.TextStyle();
        style.fontFamily = 'Arial'
        style.fontSize = 43;
        style.fill = '#ffffff';

        const text = new PIXI.Text('Keep exploring the catalog!', style)
        this.setChild('text', text)
    }
}