<template>
  <div>
  <div class="box animated bounceInDown">
    <h1>{{ msg }}</h1>
  </div>


  <div id="cameraContainer">

  </div>


  <div id="playerContainer">

  </div>

  </div>
</template>

<script src="//static-1.talk-fun.com/open/cooperation/demos/live-pc/js/libs/libs.min.js"></script>

<!--@ SDK-PC包文件 -->
<script src="//static-1.talk-fun.com/open/maituo_v2/dist/live/pc/sdk-pc.3.1.min.js"></script>
<!--@ SDK-H5包文件 -->
<script src="//static-1.talk-fun.com/open/maituo_v2/dist/live/mobile/h5/sdk-mobile.2.9.min.js"></script>
<script>
   //请求获取token
   var access_token = "${access_token}";
  // 创建SDK对象
  // var _HT = new MT.SDK.main(access_token);
  // 监听 "connect" 方法
  _HT.on("connect", function(){
    // 连接完成
  });
  _HT.camera("cameraContainer", "camerarPlayer", function(camera){
    // 创建摄像头对象成功
  });
  _HT.mainPlayer("playerContainer", "mainPlayer", function(player){
  //   // 创建课件对象成功;
  });
  import { Loading } from 'vant'
  export default {
   components: {
     [Loading.name]: Loading
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
