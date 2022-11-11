import { ui } from '../ui/layaMaxUI'

export default class BitmapFontRT extends ui.BitmapFontUI {
    //给自己注册的字体起个名
    private fontName: string = "diyFont";

    constructor() {
        super()
    }

    onAwake(): void {
        //加载位位图字体
        this.loadBitmapFont();
    }

    /**
     * 实例化位图字体类，并加载位图字体
     */
    loadBitmapFont(): void {
        let bitmapFont: Laya.BitmapFont = new Laya.BitmapFont();
        bitmapFont.loadFont("res/test.fnt", new Laya.Handler(this, this.onFontLoaded, [bitmapFont]));
    }

    /**
     * 位图字体加载完成后的回调方法
     * @param bitmapFont 实例后的位图字体对象
     */
    onFontLoaded(bitmapFont: Laya.BitmapFont): void {
        //如果采用系统字生成的位图字体，可以在这里控制空格的宽度,如果系统字里带有空格，也没必要设置了
        // bitmapFont.setSpaceWidth(10);  
        //注册位图字体
        Laya.Text.registerBitmapFont(this.fontName, bitmapFont);
        //使用注册完的位图字体来创建文本
        this.createText(this.fontName);
    }

    /**
     * 创建一个Text文本
     * @param font 注册的字体
     * @readme 当注册完成位图字体后，在这个方法里，使用位图字体和Text使用其它字体是一样的
     */
    createText(font: string): void {
        var txt: Laya.Text = new Laya.Text();
        //设置每行的显示宽度
        txt.width = 260;
        //开启自动换行
        txt.wordWrap = true;
        txt.text = "Do one thing at a time, and do well.";
        //使用注册后的字体
        txt.font = font;
        txt.leading = 15;
        //把文本添加到场景中的bf节点下
        this.bf.addChild(txt);
    }
}