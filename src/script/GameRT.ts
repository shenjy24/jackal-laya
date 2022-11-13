import HelloInput from '../feature/text/Input';
import LoadImageToSwitch from '../feature/image/LoadImageToSwitch';
import HelloText from '../feature/text/Text'
import LoadImage from '../feature/image/LoadImage';
export default class GameRT extends Laya.Script {
    /** @prop {name:strType, tips:"字符串类型示例", type:String, default:"laya"}*/
    public strType: string = "laya";
    // 更多参数说明请访问: https://ldc2.layabox.com/doc/?nav=zh-as-2-4-0
    
    constructor() { super(); }
    
    onEnable(): void {
        console.log("Hello " + this.strType)
        // 展示文本
        new HelloText()
        // 展示输入框
        new HelloInput()
        // 展示图片
        new LoadImage()
        // 展示图片，点击切换
        new LoadImageToSwitch()
    }

    onDisable(): void {
    }
}