export default class MainRT extends Laya.Script {
    /** @prop {name:btn, type:Node}*/
    public btn: Laya.Button;
    /** @prop {name:aniBtn, type:Node}*/
    public aniBtn: Laya.Button;
    // 更多参数说明请访问: https://ldc2.layabox.com/doc/?nav=zh-as-2-4-0
    
    constructor() { super(); }
    
    onEnable(): void {
        this.btn.on(Laya.Event.CLICK, this, () => {
            //点击后，打开UI场景示例
            Laya.Scene.open("Game.scene")
        });
        this.aniBtn.on(Laya.Event.CLICK, this, () => {
            //点击后，打开UI场景示例
            Laya.Scene.open("Animation.scene")
        });
    }

    onDisable(): void {
    }
}