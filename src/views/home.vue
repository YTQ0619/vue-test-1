<template>
  <div class="home-container">
    <h1>VUE3教学</h1>
    <nav class="navigation">
      <router-link to="/new" class="nav-link">NEW新组建集合11.13</router-link>
    </nav>
    <!-- <h1>Home</h1> -->
    <Mobanyufa />
    <Shuxingbangding />
    <tiaojianxuanrang />
    <liebiaoxuanrang />
    <keyguanglizhuangtai />
    <shijianchuli />
    <shijianchuancan />
    <shijianxiushifu />
    <shuzubianhuazhence />
    <jishuanshuxing />
    <classbangding />
    <mobanyvfa />
    <tiaojianxuanrang />
    <biaodanshujvbangding />
    <mobanyingyong />
    <shuxingbangding />
    <zujianqiantao />
    <zhujianshijian />
    <zujianshijianVmodel />
    <zujianchuanzhiprops />
    <propsjiaoyanA />
    <zhazhaoslots />
    <shengmingzhouqi />
    <zhengmingzhouqiyingyong />
    <Dongtaizhujian />
    <Yibuzujian />
    <yilaizhuruparent/>

  </div>
</template>

<script>
import Mobanyufa from '../components/mobanyvfa.vue';
import Shuxingbangding from '../components/shuxingbangding.vue';
import Tiaojianxuanrang from '../components/tiaojianxuanrang.vue';
import liebiaoxuanrang from '../components/liebiaoxuanrang.vue';
import keyguanglizhuangtai from '../components/keyguanglizhuangtai.vue';
import shijianchuli from '../components/shijianchuli.vue';
import shijianchuancan from '../components/shijianchuancan.vue';
import shijianxiushifu from '../components/shijianxiushifu.vue';
import shuzubianhuazhence from '../components/shuzubianhuazhence.vue';
import jishuanshuxing from '../components/jishuanshuxing.vue';
import classbangding from '../components/classbangding.vue';
import mobanyvfa from '../components/mobanyvfa.vue';
import tiaojianxuanrang from '../components/tiaojianxuanrang.vue';
import biaodanshujvbangding from '../components/biaodanshujvbangding.vue';
import mobanyingyong from '../components/mobanyingyong.vue';
import shuxingbangding from '../components/shuxingbangding.vue';
import zujianqiantao from '../components/zujianqiantao.vue';
import zujianchuanzhiprops from '../components/zujianchuanzhiprops.vue';
import propsjiaoyanA from '../components/propsjiaoyanA.vue';
import zhujianshijian from '../components/zhujianshijian.vue';
import zujianshijianVmodel from '../components/zujianshijianVmodel.vue';
import zhazhaoslots from '../components/zhazhaoslots.vue';
import shengmingzhouqi from '../components/shengmingzhuoqi.vue';
import zhengmingzhouqiyingyong from '../components/zhengmingzhouqiyingyong.vue';
import Dongtaizhujian from '../components/dongtaizhujian.vue';
import dongtaizhujian from '../components/dongtaizhujian.vue';
import Yibuzujian from '../components/yibuzujian.vue';
import yilaizhuruparent from '../components/yilaizhuruparent.vue';



export default {
  name: 'Home',
  components: {
    Mobanyufa,
    Shuxingbangding,
    Tiaojianxuanrang,
    liebiaoxuanrang,
    keyguanglizhuangtai,
    shijianchuli,
    shijianchuancan,
    shijianxiushifu,
    shuzubianhuazhence,
    jishuanshuxing,
    classbangding,
    mobanyvfa,
    tiaojianxuanrang,
    biaodanshujvbangding,
    mobanyingyong,
    shuxingbangding,
    zujianqiantao,
    zhujianshijian,
    zujianshijianVmodel,
    zujianchuanzhiprops,
    propsjiaoyanA,
    zhazhaoslots,
    shengmingzhouqi,
    zhengmingzhouqiyingyong,
    Dongtaizhujian,
    Yibuzujian,
    yilaizhuruparent,

  }
}
</script>

<style scroped>
.home-container {
  position: relative;
  z-index: 10;
}

h1 {
  z-index: 11;
  color: aqua;
}

.navigation {
  margin: 20px 0;
  z-index: 11;
}

.nav-link {
  display: inline-block;
  padding: 10px 20px;
  background-color: rgba(225, 128, 255, 0.1);
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.nav-link:hover {
  background-color: rgba(225, 128, 255, 0.5);
}

</style>