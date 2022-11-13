export default class HelloInput {
    constructor() {
        // 不支持WebGL时自动切换至Canvas
        Laya.init(Laya.Browser.clientWidth, Laya.Browser.clientHeight, Laya.WebGL);
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        Laya.stage.scaleMode = "showall";
        Laya.stage.bgColor = "#232628";
        this.createSingleInput();
        this.createMultiInput();
    }

    // 单行输入
    private createSingleInput(): void {
        let inputText: Laya.Input = new Laya.Input()
        inputText.size(350, 100)
        inputText.x = Laya.stage.width - inputText.width >> 1
        inputText.y = (Laya.stage.height - inputText.height >> 1) - 100
        // 移动端输入提示符
        inputText.prompt = "Type some word..."

        // 设置字体样式
        inputText.bold = true
        inputText.bgColor = "#666666"
        inputText.color = "#ffffff"
        inputText.fontSize = 20
        Laya.stage.addChild(inputText)
    }

    // 多行输入
    private createMultiInput(): void {
        let inputText: Laya.Input = new Laya.Input()
        // 移动端输入提示符
        inputText.prompt = "Type some word...";
        //多行输入
        inputText.multiline = true;
        inputText.wordWrap = true;

        inputText.size(350, 100);
        inputText.x = Laya.stage.width - inputText.width >> 1;
        inputText.y = (Laya.stage.height - inputText.height >> 1) + 100;
        inputText.padding = [2, 2, 2, 2];
        inputText.bgColor = "#666666";
        inputText.color = "#ffffff";
        inputText.fontSize = 20;
        Laya.stage.addChild(inputText);
    }
}