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