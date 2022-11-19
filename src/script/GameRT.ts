import HelloInput from '../feature/text/Input';
import HelloText from '../feature/text/Text'
import LoadImageToSwitch from '../feature/image/LoadImageToSwitch';
import LoadImage from '../feature/image/LoadImage';
import DrawTexture from '../feature/image/DrawTexture';
import DrawTextureToSwitch from '../feature/image/DrawTextureToSwitch';
import GraphicsImage from '../feature/image/GraphicsImage';
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
        // drawTexture方法显示与切换图片
        new DrawTexture()
        new DrawTextureToSwitch()
        // 矢量图画图
        let graphicsImage = new GraphicsImage()
        graphicsImage.drawLine()
        graphicsImage.drawLines()
        graphicsImage.drawCurves()
        graphicsImage.drawTriangle()
        graphicsImage.drawPolygon()
        graphicsImage.drawStar()
        graphicsImage.drawCircle()
        graphicsImage.drawPie()
        graphicsImage.drawRoundRect()
    }

    onDisable(): void {
    }
}