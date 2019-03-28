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
<script>
  import { Loading } from 'vant'

  export default {
   components: {
     [Loading.name]: Loading
  },
  mounted() {
    var access_token = 'lJmYjVjZwYDOlJTN5UjNzIDZkhjZ0IzY4kDOhJDOjZDf8xXfigDO2YDNy8lMxgzN5cjI6ISZtFmbyJCLwojIhJCLwojIkl2ZiwCO4YjN0IjOiQWafV2cyV3bjJCLiIiOiIXY0FmdhJCLwojIyVGZuV2ZiwyMxEDM3UjM1UTM6ISZylGc4VmIsMTM1gDN1ITN1EjOiUWbpR3ZlJnIs01W6Iic0RXYiwiI0NXZ1dmI6ISZs9mciwCN0gDO2MjM2ojIklGeiwiIyADM2QTOyEmY1UHX4MTZ2UHXiojIl1WYut2Yp5mIsAjOiQWaiJCLikDNzkzMzIjM5FmcyFkI6ICZpVnIsITM4cTO3ojIklWbv9mciwyN0EjMxojIklGciwyN0EjMxojIkl2XyVmb0JXYwJye';
    // 创建SDK对象
    var _HT = new MT.SDK.main(access_token);
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
    this.getRequest();
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    getRequest() {
      this.$http.get('/ip', res => {
        console.log(res)
      })
      this.request('IdentifyCode', {
        id: this.removeItem.id
      }).then(res => {
        if (res.success) {
         // 成功
        }
      }).catch(e => {
        console.log(e);
      })


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
