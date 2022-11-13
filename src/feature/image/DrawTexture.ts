export default class DrawTexture {
    constructor() {
        // 不支持WebGL时自动切换至Canvas
        Laya.init(Laya.Browser.clientWidth, Laya.Browser.clientHeight, Laya.WebGL)
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER
        Laya.stage.scaleMode = "showall"
        Laya.stage.bgColor = "#ffffff"
        this.showApe()
    }

    private showApe():void {
        Laya.loader.load("res/apes/monkey2.png", Laya.Handler.create(this, () => {
            let t:Laya.Texture = Laya.loader.getRes("res/apes/monkey2.png")
            let ape:Laya.Sprite = new Laya.Sprite()
            ape.graphics.drawTexture(t, 0, 0)
            Laya.stage.addChild(ape)
            ape.pos(300, 50)
        }))
    }
 }