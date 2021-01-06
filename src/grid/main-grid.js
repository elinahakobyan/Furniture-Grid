import { CellAlign, CellScale, PixiGrid } from '@armathai/pixi-grid';
import { mainGridConfig } from './main-grid-config';
import {pages}from './constants.js'

export class MainGrid extends PixiGrid {
  getGridConfig() {
    return mainGridConfig()
  }

  constructor() {
    super();

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

  }

  createLogo(logo){
    
    const sprite = PIXI.Sprite.from(logo.name);
    this.setChild(logo.name ,sprite)
  }

  createFurniture(page){
    for(let i=1;i<page.length;i++){

      const sprite = PIXI.Sprite.from(page[i].name);
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

 


 
}
