class StaticResourceUtil {
    constructor(){
         this.images = {};
    }

    /**
     * 加载本地的图片
     */
    loadImages(jsonURL, callBack){
       // 1. 创建xhr对象
       let xhr = new XMLHttpRequest();
       // 2. AJAX三步走
       xhr.open('get', jsonURL, true);
       xhr.send();
       xhr.addEventListener('readystatechange', ()=>{
           if(xhr.readyState === 4){
               if(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304){
                    // 2.0 已经加载好的图片数量
                   let alreadyLoadNumber = 0;
                   // 2.1 转成json对象
                   let jsonObj = JSON.parse(xhr.responseText);
                   // console.log(jsonObj);
                   // 2.2 遍历
                   for (let i = 0; i < jsonObj.images.length; i++) {
                        // 2.2.1 创建一个图片对象
                       let image = new Image();
                       // 2.2.2 设置src属性
                       image.src = jsonObj.images[i].src;
                       // 2.2.3 加载完成
                       image.addEventListener('load', ()=>{
                            // 2.2.4 加载完成的图片数量+1
                           alreadyLoadNumber++;
                            // 2.2.5 保存图片对象
                            let key = jsonObj.images[i].name;
                            this.images[key] = image;
                            // console.log(this.images);
                            // 2.2.6 调用回调函数 把 参数返回出去
                           callBack && callBack(alreadyLoadNumber, jsonObj.images.length, this.images);
                       });
                   }
               }
           }
       });
    }

}