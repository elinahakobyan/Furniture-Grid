import * as PIXI from 'pixi.js';
import { MainGrid } from './grid/main-grid';
import { LastPageGrid } from './grid/last-page-grid';
import EventEmitter from 'eventemitter3'
// import { gsap, Bounce } from 'gsap';
// import { PixiPlugin } from 'gsap/PixiPlugin';
const emitter = new EventEmitter()

export function getEmiter() {
  return emitter;
}

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
    const emmiter = getEmiter()
    emmiter.on("retry", this.retry, this)
  }

  _resize() {
    this.renderer.resize(window.innerWidth, window.innerHeight);
    this._mainView.rebuild();
  }

  _loadAssets() {
    this.loader.add('d1', 'assets/ui/d1.png')
      .add('d2', 'assets/ui/d2.png')
      .add('d3', 'assets/ui/d3.png')
      .add('d4', 'assets/ui/d4.png')
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
      .add('redButton', 'assets/ui/redButton.png')
      .add('blueButton', 'assets/ui/blueButton.png');
    this.loader.load(() => {
      this._onLoadComplete()
    });
  }
  _onLoadComplete() {
    this._build()
  }

  _build() {
    this.stage.addChild((this._mainView = new MainGrid()));
  }

  retry() {
    console.warn(this);
    this.stage.destroy({ children: true })
    this.stage = new PIXI.Container()
    this._onLoadComplete()
    this._resize()
  }
}
