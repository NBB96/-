/*
  FPS 每秒传输帧数(Frames Per Second)
*/

class FrameUtil {
    constructor(){
        // 1. 当前的帧序号
        this.currentFrame = 0;
        // 2. FPS
        this.realFps = 0;
        // 3. 起始帧
        this.sFrame = 0;
        this.sTime = new Date();
    }

    /**
     * 更新
     */
    update(){
        // 1. 当前的帧序号++
        this.currentFrame++;
        // 2. 判断sTime是否走过了1s
        let t = new Date();
        // 3. 判断
        if(t - this.sTime >= 1000){
            // 3.1 计算FPS
            this.realFps = this.currentFrame - this.sFrame;
            // 3.2 更新起始帧和起始时间
            this.sFrame = this.currentFrame;
            this.sTime = t;
        }

    }
}