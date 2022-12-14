/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
import AnimationRT from "./script/AnimationRT"
import BitmapFontRT from "./script/BitmapFontRT"
import GameRT from "./script/GameRT"
import MainRT from "./script/MainRT"
/*
* 游戏初始化配置;
*/
export default class GameConfig{
    static width:number=640;
    static height:number=1136;
    static scaleMode:string="fixedwidth";
    static screenMode:string="none";
    static alignV:string="top";
    static alignH:string="left";
    static startScene:any="Main.scene";
    static sceneRoot:string="";
    static debug:boolean=false;
    static stat:boolean=false;
    static physicsDebug:boolean=false;
    static exportSceneToJson:boolean=true;
    constructor(){}
    static init(){
        var reg: Function = Laya.ClassUtils.regClass;
        reg("script/AnimationRT.ts",AnimationRT);
        reg("script/BitmapFontRT.ts",BitmapFontRT);
        reg("script/GameRT.ts",GameRT);
        reg("script/MainRT.ts",MainRT);
    }
}
GameConfig.init();