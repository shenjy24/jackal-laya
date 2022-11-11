export default class SpriteImage {
    constructor() {
        // 不支持WebGL时自动切换至Canvas
        Laya.init(Laya.Browser.clientWidth, Laya.Browser.clientHeight, Laya.WebGL);
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        Laya.stage.scaleMode = "showall";
        Laya.stage.bgColor = "#ffffff";
        this.showApe();
    }

    private showApe():void {
        let ape:Laya.Sprite = new Laya.Sprite()
        ape.pos(100, 50)
        Laya.stage.addChild(ape)
        ape.loadImage("res/apes/monkey3.png")
    }
}