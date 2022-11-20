import AtlasAnimation from "../feature/animation/AtlasAnimation";
import TweenAnimation from "../feature/animation/TweenAnimation";

export default class AnimationRT extends Laya.Script {
    
    constructor() { 
        super(); 
        //初始化舞台
        console.log(`width:${Laya.Browser.clientWidth}, height:${Laya.Browser.clientHeight}`)
        Laya.init(Laya.Browser.clientWidth, Laya.Browser.clientHeight, Laya.WebGL)
        Laya.stage.bgColor = '#1b2436'
    }
    
    onEnable(): void {
        // 图集动画
        let atlasAni: AtlasAnimation = new AtlasAnimation()
        // 缓动动画
        let tweenAni: TweenAnimation = new TweenAnimation()
        tweenAni.createTweenFromText()
        tweenAni.createTweenToText()
    }

    onDisable(): void {
    }
}