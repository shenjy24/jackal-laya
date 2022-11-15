export default class GraphicsImage {

    constructor() {
        Laya.init(Laya.Browser.clientWidth, Laya.Browser.clientHeight, Laya.WebGL)
    }

    // 画直线
    public drawLine(): void {
        let sp: Laya.Sprite = new Laya.Sprite()
        Laya.stage.addChild(sp)
        sp.graphics.drawLine(10, 58, 146, 58, "#FF0000", 3)
    }

    // 画折线
    public drawLines(): void {
        let sp: Laya.Sprite = new Laya.Sprite()
        Laya.stage.addChild(sp)
        sp.graphics.drawLines(20, 88, [0, 0, 39, -50, 78, 0, 120, -50], "#FF0000", 3)
    }

    // 画贝塞尔曲线
    public drawCurves(): void {
        let sp: Laya.Sprite = new Laya.Sprite()
        Laya.stage.addChild(sp)
        sp.graphics.drawCurves(10, 58, [0, 0, 19, -100, 39, 0], "#FF0000", 3)
    }

    // 画三角形
    public drawTriangle(): void {
        let sp: Laya.Sprite = new Laya.Sprite()
        Laya.stage.addChild(sp)
        sp.graphics.drawPoly(30, 28, [0, 100, 50, 0, 100, 100], "#FFFF00")
    }

    // 画多边形
    public drawPolygon(): void {
        let sp: Laya.Sprite = new Laya.Sprite()
        Laya.stage.addChild(sp)
        sp.graphics.drawPoly(130, 28, [0, 100, 50, 0, 100, 100, 75, 150, 25, 150], "#FFFF00")
    }

    // 画五角星
    public drawStar(): void {
        let sp: Laya.Sprite = new Laya.Sprite()
        Laya.stage.addChild(sp)

        let path: Array<number> = [];
        path.push(0, -130);//五角星A点坐标
        path.push(33, -33);//五角星B点坐标
        path.push(137, -30);//五角星C点坐标
        path.push(55, 32);//五角星D点坐标
        path.push(85, 130);//五角星E点坐标
        path.push(0, 73);//五角星F点坐标
        path.push(-85, 130);//五角星G点坐标
        path.push(-55, 32);//五角星H点坐标
        path.push(-137, -30);//五角星I点坐标
        path.push(-33, -33);//五角星J点坐标
        sp.graphics.drawPoly(Laya.stage.width / 2, Laya.stage.height / 2, path, "#FF7F50");
    }

    // 画圆
    public drawCircle(): void {
        let sp: Laya.Sprite = new Laya.Sprite()
        Laya.stage.addChild(sp)
        sp.graphics.drawCircle(80, 80, 50, "#FF0000")
    }

    // 画扇型
    public drawPie(): void {
        let sp: Laya.Sprite = new Laya.Sprite()
        Laya.stage.addChild(sp)
        sp.graphics.drawPie(100, 100, 50, 90, 180, "#FF0000")
    }

    // 画矩形
    public drawRect(): void {
        let sp: Laya.Sprite = new Laya.Sprite()
        Laya.stage.addChild(sp)
        sp.graphics.drawRect(20, 20, 100, 50, "#FFFF00")
    }

    // 画矩形
    public drawRectByPath(): void {
        let sp: Laya.Sprite = new Laya.Sprite()
        Laya.stage.addChild(sp)
        //自定义路径
        var path: Array<any> = [
            ["moveTo", 0, 0], //画笔移到A点
            ["lineTo", 100, 0],//画到B点
            ["lineTo", 100, 50],//再画到C点
            ["lineTo", 0, 50], //继续画到D点
            ["closePath"] //闭合路径
        ];
        //绘制矩形
        sp.graphics.drawPath(20, 20, path, { fillStyle: "#ff0000" });
    }

    // 画圆角矩形
    public drawRoundRect(): void {
        let sp: Laya.Sprite = new Laya.Sprite()
        Laya.stage.addChild(sp)
        //自定义路径
        var path: any[] = [
            ["moveTo", 30, 0], //画笔的起始点，
            ["lineTo", 400, 0],
            ["arcTo", 500, 0, 500, 30, 30], //p1（500,0）为夹角B，（500,30）为端点p2，半径为30
            ["lineTo", 500, 200],
            ["arcTo", 500, 300, 470, 300, 30],//p1（500,300）为夹角C，（470,300）为端点p2
            ["lineTo", 30, 300],
            ["arcTo", 0, 300, 0, 270, 30], //p1(0,300)为夹角D，（0,270）为端点p2
            ["lineTo", 0, 100],
            ["arcTo", 0, 0, 30, 0, 30],//p1(0,0)为夹角A，（30,0）为端点p2
        ];
        //绘制圆角矩形
        sp.graphics.drawPath(100, 100, path, { fillStyle: "#00ffff" }, {"strokeStyle":"#ffffff","lineWidth":"10"});
    }
}