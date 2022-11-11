export default class HelloText {
    constructor() {
        // 不支持WebGL时自动切换至Canvas
        Laya.init(Laya.Browser.clientWidth, Laya.Browser.clientHeight, Laya.WebGL)

        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER

        Laya.stage.scaleMode = "showall"
        Laya.stage.bgColor = "#232628"

        let txt: Laya.Text = new Laya.Text()
        //设置文本内容
        txt.text = "hello laya"
        //设置文本颜色
        txt.color = "#ffffff";
        //设置文本字体
        txt.font = "Ya Hei";
        //设置字体大小
        txt.fontSize = 32;
        //设置文本取背景
        txt.bgColor = "#c30c30";
        //设置文本框的颜色
        txt.borderColor = "#23cfcf";
        //设置粗体、斜体
        txt.bold = true;
        //设置斜体
        txt.italic = true;
        Laya.stage.addChild(txt)
    }
}