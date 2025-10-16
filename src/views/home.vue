<template>
  <div class="home-container">
    <h1>Home</h1>
    <Mobanyufa />
    <Shuxingbangding />
    <tiaojianxuanrang />
  </div>
</template>

<script>
import Mobanyufa from '../components/mobanyvfa.vue';
import Shuxingbangding from '../components/shuxingbangding.vue';
import Tiaojianxuanrang from '../components/tiaojianxuanrang.vue';

export default {
  name: 'Home',
  components: {
    Mobanyufa,
    Shuxingbangding,
    Tiaojianxuanrang,

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