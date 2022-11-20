export default class AtlasAnimation {

    private ani: Laya.Animation

    constructor() {
        //初始化舞台
        // console.log(`width:${Laya.Browser.clientWidth}, height:${Laya.Browser.clientHeight}`)
        // Laya.init(Laya.Browser.clientWidth, Laya.Browser.clientHeight, Laya.WebGL)
        // Laya.stage.bgColor = '#FFFFFF'
        //创建动画实例
        this.ani = new Laya.Animation()
        //加载动画画集，加载成功后执行回调方法
        console.log("加载图集动画")
        //this.ani.loadAtlas("res/atlas/role/frameAni.atlas", Laya.Handler.create(this, this.onLoaded))
        //this.ani.loadAtlas("res/atlas/role/frameAni.atlas", Laya.Handler.create(this, this.onLoadedFrame))
        this.ani.loadAtlas("res/atlas/role/frameAni.atlas", Laya.Handler.create(this, this.onLoadedImage))
    }

    // 运动整个图集
    private onLoaded(): void {
        // 添加到舞台
        console.log("图集动画添加到舞台")
        // this.ani.pos(100, 200)
        Laya.stage.addChild(this.ani)
        this.ani.play()
    }

    // 只运动图集中的某几张图片
    private onLoadedFrame(): void {
        //添加到舞台
        Laya.stage.addChild(this.ani);
        //创建动画模板dizziness
        Laya.Animation.createFrames(this.aniUrls("moveB", 7), "dizziness");
        //循环播放动画
        this.ani.play(0, true, "dizziness");
    }

    // 使用loadImages播放图集中指定的动画
    private onLoadedImage(): void {
        this.ani = new Laya.Animation()
        Laya.stage.addChild(this.ani)
        //通过数组加载动画资源，然后用play方法直接播放。
        //由于loadImages方法返回的是Animation对象本身，可以直接使用“loadImages(...).play(...);”语法。
        this.ani.loadImages(this.aniUrls("moveH", 7)).play()
    }

    /**
    * 创建一组动画的url数组（美术资源地址数组）
    * aniName  动作的名称，用于生成url
    * length   动画最后一帧的索引值，
    */
    private aniUrls(aniName: string, length: number): any {
        var urls: any = [];
        for (var i: number = 0; i < length; i++) {
            //动画资源路径要和动画图集打包前的资源命名对应起来
            urls.push("role/frameAni/" + aniName + i + ".png");
        }
        return urls;
    }
}