import AtlasAnimation from "../feature/animation/AtlasAnimation";

export default class AnimationRT extends Laya.Script {
    // 更多参数说明请访问: https://ldc2.layabox.com/doc/?nav=zh-as-2-4-0
    
    constructor() { super(); }
    
    onEnable(): void {
        // 图集动画
        let atlasAni:AtlasAnimation = new AtlasAnimation()
        
    }

    onDisable(): void {
    }
}