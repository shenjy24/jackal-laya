import HelloInput from '../feature/Input';
import SpriteImage from '../feature/SpriteImage';
import SpriteSwitchImage from '../feature/SpriteSwitchImage';
import HelloText from '../feature/Text'
export default class GameRT extends Laya.Script {
    /** @prop {name:strType, tips:"字符串类型示例", type:String, default:"laya"}*/
    public strType: string = "laya";
    // 更多参数说明请访问: https://ldc2.layabox.com/doc/?nav=zh-as-2-4-0
    
    constructor() { super(); }
    
    onEnable(): void {
        console.log("Hello " + this.strType)
        new HelloText()
        new HelloInput()
        new SpriteImage()
        new SpriteSwitchImage()
    }

    onDisable(): void {
    }
}