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
    var access_token = 'lJmYjVjZwYDOlJTN5UjNzIDZkhjZ0IzY4kDOhJDOjZDf8xXfigDO2YDNy8lMxgzN5cjI6ISZtFmbyJCLwojIhJCLwojIkl2ZiwCO4YjN0IjOiQWafV2cyV
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    getRequest() {
      this.request('UserLogin', {
        'Code':1,
        'PassWord':1,
        'SiteId':1,
        'IsWeiXin':1,
        'SissionId':1
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
