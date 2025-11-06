<template>
  <div class="home-container">
    <h1>Home</h1>
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
    <BackgroundEffect />
    <classbangding />
    <mobanyvfa />
    <tiaojianxuanrang />
    <biaodanshujvbangding />
    <mobanyingyong />
    <shuxingbangding />
    <zujianqiantao />
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
import BackgroundEffect from '../components/BackgroundEffect.vue';
import classbangding from '../components/classbangding.vue';
import mobanyvfa from '../components/mobanyvfa.vue';
import tiaojianxuanrang from '../components/tiaojianxuanrang.vue';
import biaodanshujvbangding from '../components/biaodanshujvbangding.vue';
import mobanyingyong from '../components/mobanyingyong.vue';
import shuxingbangding from '../components/shuxingbangding.vue';
import zujianqiantao from '../components/zujianqiantao.vue';



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
    BackgroundEffect,
    classbangding,
    mobanyvfa,
    tiaojianxuanrang,
    biaodanshujvbangding,
    mobanyingyong,
    shuxingbangding,
    zujianqiantao,
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
</style>