import * as PIXI from 'pixi.js';
import { MainGrid } from './grid/main-grid';
// import { gsap, Bounce } from 'gsap';
// import { PixiPlugin } from 'gsap/PixiPlugin';

export class Game extends PIXI.Application {
  constructor() {
    super({
      backgroundColor: 0xffffff,
      width: window.innerWidth,
      height: window.innerHeight,
    });
    window.addEventListener('resize', this._resize.bind(this));

    document.body.appendChild(this.view);
    // gsap.registerPlugin(PixiPlugin);
    // PixiPlugin.registerPIXI(PIXI);
    this._loadAssets();
  }

  _resize() {
    this.renderer.resize(window.innerWidth, window.innerHeight);
    this._mainView.rebuild();
  }

  _loadAssets() {
    this.loader.add('burgundyDivan', 'assets/ui/burgundyDivan.png')
      .add('grayDivan', 'assets/ui/grayDivan.png')
      .add('orangeDivan', 'assets/ui/orangeDivan.png')
      .add('torquoiseDivan', 'assets/ui/torquoiseDivan.png')
      .add('hand', 'assets/ui/hand.png')
      .add('like', 'assets/ui/icon_like.png')
      .add('logo', 'assets/ui/logo.png')
      .add('chair1', 'assets/furniture/chair1.png')
      .add('chair2', 'assets/furniture/chair2.png')
      .add('chair3', 'assets/furniture/chair3.png')
      .add('chair4', 'assets/furniture/chair4.png')
      .add('table1', 'assets/furniture/table1.png')
      .add('table2', 'assets/furniture/table2.png')
      .add('table1k', 'assets/furniture/table1k.png')
      .add('font', 'assets/font/kenvector_future.ttf')
      .add('bg', 'assets/ui/nkar.png')
      .add('red', 'assets/ui/button.png')
      .add('blue', 'assets/ui/bluebutton.png');
    this.loader.load(() => {
      this._build();
    });
  }

  _build() {
    this.stage.addChild((this._mainView = new MainGrid()));
  }
}
