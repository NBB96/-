class Game {
    constructor(parmasJson) {
        /** @type {HTMLCanvasElement} */
        //定时器
        this.timer = null
        //获取canvas的标签
        this.canvas = document.getElementById(parmasJson.canvasId)
        //获取上下文
        this.ctx = this.canvas.getContext('2d')
        // 帧工具
        this.frameUtil = new FrameUtil()
        //FPS
        this.fps = this.frameUtil.realFps || 60;
        //所有图片资源
        this.images = null
        //实例化
        this.sr=new StaticResourceUtil()
        //加载图片本地资源
        this.sr.loadImages('resource.json',(alreadyLoadNum,allNum,imageObj)=>{
          console.log(alreadyLoadNum,allNum,imageObj);
          
        })
    }
    /**
     * 运行游戏
     */
    run() {
        // 开启定时器
        this.timer = setInterval(() => {
            //执行主循环
            this.mainLoop();
        }, 1000 / this.fps)
    }

    /**
     * 主循环
     */
    mainLoop() {
        //调用帧工具
        this.frameUtil.update()
        //清屏
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        //绘制fps
        this.ctx.font = '16px Microsoft YaHei'
        this.ctx.fillText('FPS/' + this.frameUtil.realFps, 20, 20)
        this.ctx.fillText('FNO/' + this.frameUtil.currentFrame, 20, 40)

    }

    /**
     * 暂停游戏
     */
    gamePause() {

    }


    /**
     * 结束游戏
     */
    end() {

    }
}