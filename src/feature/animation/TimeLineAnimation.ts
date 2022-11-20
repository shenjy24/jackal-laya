import { ui } from "../../ui/layaMaxUI";

export default class TimeLineAnimation {

    constructor() {
        //加载图集成功后，执行onLoaded回调方法
        Laya.loader.load("res/atlas/res/apes.atlas", Laya.Handler.create(this, this.onLoaded));
    }

    private onLoaded(): void {
        //创建一个Animation实例
        let tl: Laya.Animation = new Laya.Animation();
        //加载动画文件
        tl.loadAnimation("TimeLineAnimation.ani");
        //添加到舞台
        Laya.stage.addChild(tl);
        //播放Animation动画
        //在默认使用播放方法play()的时候，缺省（默认）是播放第一个动画
        tl.play();

        //创建一个新的Animation实例
        let tl2: Laya.Animation = new Laya.Animation();
        //加载动画文件
        tl2.loadAnimation("TimeLineAnimation.ani");
        //添加到舞台
        Laya.stage.addChild(tl2);
        //播放Animation动画的pivot动画
        tl2.play(0, true, "pivot");
        //动画的显示位置
        tl2.pos(300, 0);

        //创建一个UI实例
        let tl3:ui.TimeLineAnimationUI = new ui.TimeLineAnimationUI()
        //添加到舞台
        Laya.stage.addChild(tl3)
        console.log(tl3.monkey)
        //播放UI场景中的动画，monkey为设置面板中var的值
        // tl3.monkey.play()
    }


}