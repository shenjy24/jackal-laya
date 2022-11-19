export default class AtlasAnimation {
    
    private ani:Laya.Animation

    constructor() { 
        //初始化舞台
        console.log(`width:${Laya.Browser.clientWidth}, height:${Laya.Browser.clientHeight}`)
        Laya.init(Laya.Browser.clientWidth, Laya.Browser.clientHeight, Laya.WebGL)
        Laya.stage.bgColor = '#FFFFFF'
        //创建动画实例
        this.ani = new Laya.Animation()
        //加载动画画集，加载成功后执行回调方法
        console.log("加载图集动画")
        this.ani.loadAtlas("res/atlas/role/frameAni.atlas", Laya.Handler.create(this, this.onLoaded))
    }

    private onLoaded(): void {
        // 添加到舞台
        console.log("图集动画添加到舞台")
        // this.ani.pos(100, 200)
        Laya.stage.addChild(this.ani)
        this.ani.play()
    }
}