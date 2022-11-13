export default class SpriteSwitchImage {
    private texture1: string = "res/apes/monkey2.png"
    private texture2: string = "res/apes/monkey3.png"
    private flag: boolean = false
    private ape: Laya.Sprite

    constructor() {
        // 不支持WebGL时自动切换至Canvas
        Laya.init(Laya.Browser.clientWidth, Laya.Browser.clientHeight, Laya.WebGL);
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        Laya.stage.scaleMode = "showall";
        Laya.stage.bgColor = "#ffffff";

        Laya.loader.load([this.texture1, this.texture2], Laya.Handler.create(this, this.onAssetsLoader))
    }

    private onAssetsLoader(): void {
        this.ape = new Laya.Sprite()
        Laya.stage.addChild(this.ape)
        // this.ape.pivot(55, 72)
        this.ape.pos(100, 250)

        // 显示默认纹理
        this.switchTexture()

        // 添加点击事件
        this.ape.on("click", this, this.switchTexture)
    }

    private switchTexture(): void {
        let textureUrl:string = (this.flag = !this.flag) ? this.texture1 : this.texture2
        //更换纹理
        this.ape.graphics.clear()
        let texture:Laya.Texture = Laya.loader.getRes(textureUrl)
        this.ape.loadImage(textureUrl)

        //设置交互区域
        this.ape.size(texture.width, texture.height)
    }
}