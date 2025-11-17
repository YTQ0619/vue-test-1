<template>
  <div class="new-container" v-if="showContent">
    <h1>NEW新组建集合11.13</h1>
    <nav class="navigation">
      <router-link  to="/" class="nav-link">返回首页</router-link>
    </nav>
    <Zuhexiangyingyingshi />
    <Zuhejisuanshuxing />
    <Zuhemobanyingyong />
    <Zuheshengmingzhouqi />
    <zuheshijianchuli />
    <Zuhezhentinqi />
    
  </div>
</template>

<script>
import Zuhexiangyingyingshi from '../newcomponents/zuhexiangyingyingshi.vue';
import Zuhejisuanshuxing from '../newcomponents/zuhejisuanshuxing.vue';
import Zuhemobanyingyong from '../newcomponents/zuhemobanyingyong.vue';
import Zuheshengmingzhouqi from '../newcomponents/zuheshengmingzhouqi.vue';
import zuheshijianchuli from '../newcomponents/zuheshijianchuli.vue';
import Zuhezhentinqi from '../newcomponents/zuhezhentinqi.vue';




export default{
  name:"new",
  data(){
    return{
      showContent:false
    }
  },
  components:{
    Zuhexiangyingyingshi,
    Zuhejisuanshuxing,
    Zuhemobanyingyong,
    Zuheshengmingzhouqi,
    zuheshijianchuli,
    Zuhezhentinqi,
  },
  mounted(){
    setTimeout(() => {
      this.showContent = true
    }, 0)
  }
}

</script>

<style>
.new-container{
 position: relative;
 z-index: 10;
}
h1{
  z-index: 11;
  color: aqua;
}

.navigation{
  margin: 20px 0;
  z-index: 11;
}
.nav-link{
  display: inline-block;
  padding: 10px 20px;
  background-color: rgba(225, 128, 255, 0.1);
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}
</style>