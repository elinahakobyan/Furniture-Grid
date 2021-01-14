import { CellAlign, CellScale, PixiGrid } from '@armathai/pixi-grid';
import { lastPageGridConfig } from './last-page-grid-config';
import { lastPage } from './constants'
import { Sofa } from '../Sofa'
import { gsap, Bounce } from 'gsap';
import { PixiPlugin } from 'gsap/PixiPlugin';
import { getEmiter } from '../game';

export class LastPageGrid extends PixiGrid {
    getGridConfig() {
        return lastPageGridConfig();
    }
    constructor() {
        super();
        gsap.registerPlugin(PixiPlugin);
        PixiPlugin.registerPIXI(PIXI);
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
        this.createButtons(page[5], page[6])
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

    createButtons(b1, b2) {
        const playButton = PIXI.Sprite.from(b1.name)
        this.setChild(b1.name, playButton)
        // this.playButtonAnim(playButton)

        const retryButton = PIXI.Sprite.from(b2.name)
        retryButton.interactive = true;
        retryButton.on('pointerdown', this.onRetryButtonClick)
        this.setChild(b2.name, retryButton)
    }

    playButtonAnim(button) {
        const tl = gsap.timeline({ repeat: -1 });
        tl.to(button, { pixi: { scaleX: 0.5, scaleY: 0.5 }, duration: 1 });
        tl.to(button, { pixi: { scaleX: 0.75, scaleY: 1 }, duration: 1 });
    }

    onRetryButtonClick() {
        const emitter = getEmiter()
        emitter.emit("retry")
    }
}