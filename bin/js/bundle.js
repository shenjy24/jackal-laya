(function () {
    'use strict';

    class AtlasAnimation {
        constructor() {
            this.ani = new Laya.Animation();
            console.log("加载图集动画");
            this.ani.loadAtlas("res/atlas/role/frameAni.atlas", Laya.Handler.create(this, this.onLoadedImage));
        }
        onLoaded() {
            console.log("图集动画添加到舞台");
            Laya.stage.addChild(this.ani);
            this.ani.play();
        }
        onLoadedFrame() {
            Laya.stage.addChild(this.ani);
            Laya.Animation.createFrames(this.aniUrls("moveB", 7), "dizziness");
            this.ani.play(0, true, "dizziness");
        }
        onLoadedImage() {
            this.ani = new Laya.Animation();
            Laya.stage.addChild(this.ani);
            this.ani.loadImages(this.aniUrls("moveH", 7)).play();
        }
        aniUrls(aniName, length) {
            var urls = [];
            for (var i = 0; i < length; i++) {
                urls.push("role/frameAni/" + aniName + i + ".png");
            }
            return urls;
        }
    }

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
        class TimeLineAnimationUI extends Scene {
            constructor() { super(); }
            createChildren() {
                super.createChildren();
                this.loadScene("TimeLineAnimation");
            }
        }
        ui.TimeLineAnimationUI = TimeLineAnimationUI;
        REG("ui.TimeLineAnimationUI", TimeLineAnimationUI);
    })(ui || (ui = {}));

    class TimeLineAnimation {
        constructor() {
            Laya.loader.load("res/atlas/res/apes.atlas", Laya.Handler.create(this, this.onLoaded));
        }
        onLoaded() {
            let tl = new Laya.Animation();
            tl.loadAnimation("TimeLineAnimation.ani");
            Laya.stage.addChild(tl);
            tl.play();
            let tl2 = new Laya.Animation();
            tl2.loadAnimation("TimeLineAnimation.ani");
            Laya.stage.addChild(tl2);
            tl2.play(0, true, "pivot");
            tl2.pos(300, 0);
            let tl3 = new ui.TimeLineAnimationUI();
            Laya.stage.addChild(tl3);
            console.log(tl3.monkey);
        }
    }

    class TweenAnimation {
        constructor() {
        }
        createTweenFromText() {
            let w = 600;
            let offsetX = Laya.stage.width - w >> 1;
            let demoString = "LayaBox";
            let letterText;
            for (let i = 0, len = demoString.length; i < len; ++i) {
                letterText = this.createLetter(demoString.charAt(i));
                letterText.x = w / len * i + offsetX;
                letterText.y = 200;
                Laya.Tween.from(letterText, { y: 100 }, 3000, Laya.Ease.elasticOut, null, i * 1000);
            }
        }
        createTweenToText() {
            let w = 600;
            let offsetX = Laya.stage.width - w >> 1;
            let demoString = "LayaBox";
            let letterText;
            for (let i = 0, len = demoString.length; i < len; ++i) {
                letterText = this.createLetter(demoString.charAt(i));
                letterText.x = w / len * i + offsetX;
                letterText.y = 800;
                Laya.Tween.to(letterText, { y: 500, update: new Laya.Handler(this, this.updateColor, [letterText]) }, 1000, Laya.Ease.bounceIn, Laya.Handler.create(this, this.changeColor, [letterText]), i * 100);
            }
        }
        updateColor(txt) {
            var c = Math.floor(Math.random() * 3);
            switch (c) {
                case 0:
                    txt.color = "#eee000";
                    break;
                case 1:
                    txt.color = "#ffffff";
                    break;
                case 2:
                    txt.color = "#ff0000";
                    break;
                default:
                    txt.color = "#eee000";
                    break;
            }
        }
        changeColor(txt) {
            txt.color = "#ff0000";
        }
        createLetter(char) {
            let letter = new Laya.Text();
            letter.text = char;
            letter.color = "#FFFFFF";
            letter.font = "Impact";
            letter.fontSize = 180;
            Laya.stage.addChild(letter);
            return letter;
        }
    }

    class AnimationRT extends Laya.Script {
        constructor() {
            super();
            console.log(`width:${Laya.Browser.clientWidth}, height:${Laya.Browser.clientHeight}`);
            Laya.init(Laya.Browser.clientWidth, Laya.Browser.clientHeight, Laya.WebGL);
            Laya.stage.bgColor = '#1b2436';
        }
        onEnable() {
            let atlasAni = new AtlasAnimation();
            let tweenAni = new TweenAnimation();
            tweenAni.createTweenFromText();
            tweenAni.createTweenToText();
            let timelineAni = new TimeLineAnimation();
        }
        onDisable() {
        }
    }

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
            this.ape.pos(100, 250);
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

    class LoadImage {
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
            ape.loadImage("res/apes/monkey2.png");
        }
    }

    class DrawTexture {
        constructor() {
            Laya.init(Laya.Browser.clientWidth, Laya.Browser.clientHeight, Laya.WebGL);
            Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
            Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
            Laya.stage.scaleMode = "showall";
            Laya.stage.bgColor = "#ffffff";
            this.showApe();
        }
        showApe() {
            Laya.loader.load("res/apes/monkey2.png", Laya.Handler.create(this, () => {
                let t = Laya.loader.getRes("res/apes/monkey2.png");
                let ape = new Laya.Sprite();
                ape.graphics.drawTexture(t, 0, 0);
                Laya.stage.addChild(ape);
                ape.pos(300, 50);
            }));
        }
    }

    class DrawTextureToSwitch {
        constructor() {
            this.texture1 = "res/apes/monkey2.png";
            this.texture2 = "res/apes/monkey3.png";
            this.flag = false;
            Laya.init(Laya.Browser.clientWidth, Laya.Browser.clientHeight, Laya.WebGL);
            Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
            Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
            Laya.stage.scaleMode = "showall";
            Laya.stage.bgColor = "#232628";
            Laya.loader.load([this.texture1, this.texture2], Laya.Handler.create(this, this.onAssetsLoaded));
        }
        onAssetsLoaded() {
            this.ape = new Laya.Sprite();
            Laya.stage.addChild(this.ape);
            this.ape.pos(300, 250);
            this.switchTexture();
            this.ape.on("click", this, this.switchTexture);
        }
        switchTexture() {
            var textureUrl = (this.flag = !this.flag) ? this.texture1 : this.texture2;
            this.ape.graphics.clear();
            var texture = Laya.loader.getRes(textureUrl);
            this.ape.graphics.drawTexture(texture, 0, 0);
            this.ape.size(texture.width, texture.height);
        }
    }

    class GraphicsImage {
        constructor() {
            Laya.init(Laya.Browser.clientWidth, Laya.Browser.clientHeight, Laya.WebGL);
        }
        drawLine() {
            let sp = new Laya.Sprite();
            Laya.stage.addChild(sp);
            sp.graphics.drawLine(10, 58, 146, 58, "#FF0000", 3);
        }
        drawLines() {
            let sp = new Laya.Sprite();
            Laya.stage.addChild(sp);
            sp.graphics.drawLines(20, 88, [0, 0, 39, -50, 78, 0, 120, -50], "#FF0000", 3);
        }
        drawCurves() {
            let sp = new Laya.Sprite();
            Laya.stage.addChild(sp);
            sp.graphics.drawCurves(10, 58, [0, 0, 19, -100, 39, 0], "#FF0000", 3);
        }
        drawTriangle() {
            let sp = new Laya.Sprite();
            Laya.stage.addChild(sp);
            sp.graphics.drawPoly(30, 28, [0, 100, 50, 0, 100, 100], "#FFFF00");
        }
        drawPolygon() {
            let sp = new Laya.Sprite();
            Laya.stage.addChild(sp);
            sp.graphics.drawPoly(130, 28, [0, 100, 50, 0, 100, 100, 75, 150, 25, 150], "#FFFF00");
        }
        drawStar() {
            let sp = new Laya.Sprite();
            Laya.stage.addChild(sp);
            let path = [];
            path.push(0, -130);
            path.push(33, -33);
            path.push(137, -30);
            path.push(55, 32);
            path.push(85, 130);
            path.push(0, 73);
            path.push(-85, 130);
            path.push(-55, 32);
            path.push(-137, -30);
            path.push(-33, -33);
            sp.graphics.drawPoly(Laya.stage.width / 2, Laya.stage.height / 2, path, "#FF7F50");
        }
        drawCircle() {
            let sp = new Laya.Sprite();
            Laya.stage.addChild(sp);
            sp.graphics.drawCircle(80, 80, 50, "#FF0000");
        }
        drawPie() {
            let sp = new Laya.Sprite();
            Laya.stage.addChild(sp);
            sp.graphics.drawPie(100, 100, 50, 90, 180, "#FF0000");
        }
        drawRect() {
            let sp = new Laya.Sprite();
            Laya.stage.addChild(sp);
            sp.graphics.drawRect(20, 20, 100, 50, "#FFFF00");
        }
        drawRectByPath() {
            let sp = new Laya.Sprite();
            Laya.stage.addChild(sp);
            var path = [
                ["moveTo", 0, 0],
                ["lineTo", 100, 0],
                ["lineTo", 100, 50],
                ["lineTo", 0, 50],
                ["closePath"]
            ];
            sp.graphics.drawPath(20, 20, path, { fillStyle: "#ff0000" });
        }
        drawRoundRect() {
            let sp = new Laya.Sprite();
            Laya.stage.addChild(sp);
            var path = [
                ["moveTo", 30, 0],
                ["lineTo", 400, 0],
                ["arcTo", 500, 0, 500, 30, 30],
                ["lineTo", 500, 200],
                ["arcTo", 500, 300, 470, 300, 30],
                ["lineTo", 30, 300],
                ["arcTo", 0, 300, 0, 270, 30],
                ["lineTo", 0, 100],
                ["arcTo", 0, 0, 30, 0, 30],
            ];
            sp.graphics.drawPath(100, 100, path, { fillStyle: "#00ffff" }, { "strokeStyle": "#ffffff", "lineWidth": "10" });
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
            new LoadImage();
            new SpriteSwitchImage();
            new DrawTexture();
            new DrawTextureToSwitch();
            let graphicsImage = new GraphicsImage();
            graphicsImage.drawLine();
            graphicsImage.drawLines();
            graphicsImage.drawCurves();
            graphicsImage.drawTriangle();
            graphicsImage.drawPolygon();
            graphicsImage.drawStar();
            graphicsImage.drawCircle();
            graphicsImage.drawPie();
            graphicsImage.drawRoundRect();
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
            this.aniBtn.on(Laya.Event.CLICK, this, () => {
                Laya.Scene.open("Animation.scene");
            });
        }
        onDisable() {
        }
    }

    class GameConfig {
        constructor() { }
        static init() {
            var reg = Laya.ClassUtils.regClass;
            reg("script/AnimationRT.ts", AnimationRT);
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
