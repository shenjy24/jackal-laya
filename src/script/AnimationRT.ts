import AtlasAnimation from "../feature/animation/AtlasAnimation";

export default class AnimationRT extends Laya.Script {
    
    constructor() { super(); }
    
    onEnable(): void {
        let atlasAni: AtlasAnimation = new AtlasAnimation()
    }

    onDisable(): void {
    }
}