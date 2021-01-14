export class Sofa extends PIXI.Container {
    constructor(image) {
        super();
        this._build(image)
    }
    _build(image) {
        const leftPart = new PIXI.Sprite.from(image)
        const rightPart = new PIXI.Sprite.from(image)
        rightPart.x += 2 * leftPart.width;
        rightPart.scale.set(-1, 1);
        this.addChild(leftPart);
        this.addChild(rightPart);
    }
}