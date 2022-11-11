(function () {
    'use strict';

    var Scene = Laya.Scene;
    var REG = Laya.ClassUtils.regClass;
    var ui;
    (function (ui) {
        class BitmapFontUI extends Scene {
            constructor() { super(); }
            createChildren() {
                super.createChildren();
                this.loadScene("BitmapFont");
            }
        }
        ui.BitmapFontUI = BitmapFontUI;
        REG("ui.BitmapFontUI", BitmapFontUI);
    })(ui || (ui = {}));

    class BitmapFontRT extends ui.BitmapFontUI {
        constructor() {
            super();
            this.fontName = "diyFont";
        }
        onAwake() {
            this.loadBitmapFont();
        }
        loadBitmapFont() {
            let bitmapFont = new Laya.BitmapFont();
            bitmapFont.loadFont("res/test.fnt", new Laya.Handler(this, this.onFontLoaded, [bitmapFont]));
        }
        onFontLoaded(bitmapFont) {
            Laya.Text.registerBitmapFont(this.fontName, bitmapFont);
            this.createText(this.fontName);
        }
        createText(font) {
            var txt = new Laya.Text();
            txt.width = 260;
            txt.wordWrap = true;
            txt.text = "Do one thing at a time, and do well.";
            txt.font = font;
            txt.leading = 15;
            this.bf.addChild(txt);
        }
    }

    class HelloInput {
        constructor() {
            Laya.init(Laya.Browser.clientWidth, Laya.Browser.clientHeight, Laya.WebGL);
            Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
            Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
            Laya.stage.scaleMode = "showall";
            Laya.stage.bgColor = "#232628";
            this.createSingleInput();
            this.createMultiInput();
        }
        createSingleInput() {
            let inputText = new Laya.Input();
            inputText.size(350, 100);
            inputText.x = Laya.stage.width - inputText.width >> 1;
            inputText.y = (Laya.stage.height - inputText.height >> 1) - 100;
            inputText.prompt = "Type some word...";
            inputText.bold = true;
            inputText.bgColor = "#666666";
            inputText.color = "#ffffff";
            inputText.fontSize = 20;
            Laya.stage.addChild(inputText);
        }
        createMultiInput() {
            let inputText = new Laya.Input();
            inputText.prompt = "Type some word...";
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

    class SpriteImage {
        constructor() {
            Laya.init(Laya.Browser.clientWidth, Laya.Browser.clientHeight, Laya.WebGL);
            Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
            Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
            Laya.stage.scaleMode = "showall";
            Laya.stage.bgColor = "#ffffff";
            this.showApe();
        }
        showApe() {
            let ape = new Laya.Sprite();
            ape.pos(100, 50);
            Laya.stage.addChild(ape);
            ape.loadImage("res/apes/monkey3.png");
        }
    }

    class SpriteSwitchImage {
        constructor() {
            this.texture1 = "res/apes/monkey2.png";
            this.texture2 = "res/apes/monkey3.png";
            this.flag = false;
            Laya.init(Laya.Browser.clientWidth, Laya.Browser.clientHeight, Laya.WebGL);
            Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
            Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
            Laya.stage.scaleMode = "showall";
            Laya.stage.bgColor = "#ffffff";
            Laya.loader.load([this.texture1, this.texture2], Laya.Handler.create(this, this.onAssetsLoader));
        }
        onAssetsLoader() {
            this.ape = new Laya.Sprite();
            Laya.stage.addChild(this.ape);
            this.ape.pivot(55, 72);
            this.ape.pos(100, 50);
            this.switchTexture();
            this.ape.on("click", this, this.switchTexture);
        }
        switchTexture() {
            let textureUrl = (this.flag = !this.flag) ? this.texture1 : this.texture2;
            this.ape.graphics.clear();
            let texture = Laya.loader.getRes(textureUrl);
            this.ape.loadImage(textureUrl);
            this.ape.size(texture.width, texture.height);
        }
    }

    class HelloText {
        constructor() {
            Laya.init(Laya.Browser.clientWidth, Laya.Browser.clientHeight, Laya.WebGL);
            Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
            Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
            Laya.stage.scaleMode = "showall";
            Laya.stage.bgColor = "#232628";
            let txt = new Laya.Text();
            txt.text = "hello laya";
            txt.color = "#ffffff";
            txt.font = "Ya Hei";
            txt.fontSize = 32;
            txt.bgColor = "#c30c30";
            txt.borderColor = "#23cfcf";
            txt.bold = true;
            txt.italic = true;
            Laya.stage.addChild(txt);
        }
    }

    class GameRT extends Laya.Script {
        constructor() {
            super();
            this.strType = "laya";
        }
        onEnable() {
            console.log("Hello " + this.strType);
            new HelloText();
            new HelloInput();
            new SpriteImage();
            new SpriteSwitchImage();
        }
        onDisable() {
        }
    }

    class MainRT extends Laya.Script {
        constructor() { super(); }
        onEnable() {
            this.btn.on(Laya.Event.CLICK, this, () => {
                Laya.Scene.open("Game.scene");
            });
        }
        onDisable() {
        }
    }

    class GameConfig {
        constructor() { }
        static init() {
            var reg = Laya.ClassUtils.regClass;
            reg("script/BitmapFontRT.ts", BitmapFontRT);
            reg("script/GameRT.ts", GameRT);
            reg("script/MainRT.ts", MainRT);
        }
    }
    GameConfig.width = 640;
    GameConfig.height = 1136;
    GameConfig.scaleMode = "fixedwidth";
    GameConfig.screenMode = "none";
    GameConfig.alignV = "top";
    GameConfig.alignH = "left";
    GameConfig.startScene = "Main.scene";
    GameConfig.sceneRoot = "";
    GameConfig.debug = false;
    GameConfig.stat = false;
    GameConfig.physicsDebug = false;
    GameConfig.exportSceneToJson = true;
    GameConfig.init();

    class Main {
        constructor() {
            if (window["Laya3D"])
                Laya3D.init(GameConfig.width, GameConfig.height);
            else
                Laya.init(GameConfig.width, GameConfig.height, Laya["WebGL"]);
            Laya["Physics"] && Laya["Physics"].enable();
            Laya["DebugPanel"] && Laya["DebugPanel"].enable();
            Laya.stage.scaleMode = GameConfig.scaleMode;
            Laya.stage.screenMode = GameConfig.screenMode;
            Laya.stage.alignV = GameConfig.alignV;
            Laya.stage.alignH = GameConfig.alignH;
            Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;
            if (GameConfig.debug || Laya.Utils.getQueryString("debug") == "true")
                Laya.enableDebugPanel();
            if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"])
                Laya["PhysicsDebugDraw"].enable();
            if (GameConfig.stat)
                Laya.Stat.show();
            Laya.alertGlobalError(true);
            Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
        }
        onVersionLoaded() {
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
        }
        onConfigLoaded() {
            GameConfig.startScene && Laya.Scene.open(GameConfig.startScene);
        }
    }
    new Main();

}());
