export default class GraphicsImage {

    constructor() {
        Laya.init(Laya.Browser.clientWidth, Laya.Browser.clientHeight, Laya.WebGL)
    }

    // 画直线
    public drawLine(): void {
        let sp: Laya.Sprite = new Laya.Sprite()
        Laya.stage.addChild(sp)
        sp.graphics.drawLine(10, 58, 146, 58, "#FF0000", 3)
    }
}