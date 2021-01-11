import { CellAlign, CellScale, PixiGrid } from '@armathai/pixi-grid';
import { mainGridConfig,LP } from './main-grid-config';
import { gsap, Bounce } from 'gsap';
import { PixiPlugin } from 'gsap/PixiPlugin';
import {pages}from './constants.js'
export class MainGrid extends PixiGrid {
  getGridConfig() {
    return mainGridConfig()
  }

  constructor() {
    super();
    gsap.registerPlugin(PixiPlugin);
    PixiPlugin.registerPIXI(PIXI);
    this.smthisdoing = false;
    this._build();
  }

  rebuild() {
    super.rebuild(this.getGridConfig());
  }

  _build() {
   this._createPage(pages[0])
  }
  
  _createPage(page){
    this.createLogo(page[0]);
    this.createFurniture(page);
     this.createBg()
     this.createHand()
  }

  createLogo(logo){

    const sprite = PIXI.Sprite.from(logo.name);
    // sprite.anchor.set(0.5)
    console.warn(sprite.position);
    this.setChild(logo.name ,sprite)
  }

  createFurniture(page){
    for(let i=1;i<page.length;i++){

      const sprite = PIXI.Sprite.from(page[i].name);
      sprite.interactive = true;
      sprite.on('pointerdown',this.onClick.bind(this,sprite))
      this.setChild(page[i].name ,sprite)
        
      this.createText(page[i],i)
    }
      
  }

 createText(page,i){
    const style = new PIXI.TextStyle();
    style.fontFamily='Arial'
    style.fontSize = 43;
    style.fill = '#000000';
    
    const header= new PIXI.Text(page.header,style)
    this.setChild(`header${[i]}`,header)

    const description= new PIXI.Text(page.description,style)
    this.setChild(`description${[i]}`,description)
  }

  createBg(){
    const sprite=new PIXI.Sprite.from('bg')
    this.setChild('bg',sprite)
    
    const style = new PIXI.TextStyle();
    style.fontFamily='Arial'
    style.fontSize = 43;
    style.fill = '#ffffff';

    const text =new PIXI.Text('Tap on the piece you love !',style)
    this.setChild('text',text)
  }

 createHand(){
    const hand = new PIXI.Sprite.from('hand');
      if(window.innerWidth > window.innerHeight){
      hand.position.set(window.innerWidth * 0.225, window.innerHeight);
    }else {
      hand.position.set(window.innerWidth / 2, window.innerHeight);
    }
    this.addChild(this.hand=hand)
    this.handAnimation(hand);
 }

 handAnimation(hand){
   const w=window.innerWidth
   const h=window.innerHeight

  let fromX, toX;
  let fromY, toY;
  if (w> h) {
    fromX = w * 0.225;
    fromY = h * 0.5;
    toX = w * 0.75;
    toY = h * 0.5;
  } else {
    fromX = w / 2;
    fromY = h * 0.41;
    toX = w / 2;
    toY = h * 0.75;
  }
  const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
  tl.to(hand, { x: fromX, y: fromY, ease: Bounce, duration: 1, yoyo: true });
  tl.to(hand, { pixi: { scaleX:  0.5, scaleY:  0.5 }, duration: 1 });
  tl.to(hand, { pixi: { scaleX: 1, scaleY: 1}, duration: 1 });
  tl.to(hand, { x: toX, y: toY, ease: Bounce, duration: 1 });
  tl.to(hand, { pixi: { scaleX:  0.5, scaleY: 0.5 }, duration: 1 });
  tl.to(hand, { pixi: { scaleX: 1, scaleY: 1 }, duration: 1 });
 }
 
 onClick(sprite){
  if (!this.smthisdoing) {
    this.smthisdoing = true;
    this.hand.alpha = 0;
    const likePosition = this.likePosition(sprite);
    let X = likePosition.x;
    let Y = likePosition.y;
    this.buildLike(X, Y);
  }
 }

likePosition(sprite){
  const w=window.innerWidth
  const h=window.innerHeight
  let X, Y;
const page=pages[0]//pages[i]
if (w> h) {
 if(page[1].name==='table1'){
      X = w * 0.25;
      Y = h * 0.5;
    } else {
      X = w * 0.75;
      Y = h * 0.5;
    }
  } else {
    if (page[1].name==='table1') {
      X = w / 2;
      Y = h * 0.27;
    } else {
      X = w / 2;
      Y = h * 0.41;
    }
  }
  return { x:X,y:Y}
}

buildLike(X, Y){
  const like = PIXI.Sprite.from('like');
    like.anchor.set(0.5);
    like.position.set(X, Y);
    // this.likeAnimation(like);
    this.addChild(like);
}
}
