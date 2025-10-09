<template>
  <div class="home-container">
    <h1>Home</h1>
    <Mobanyufa />
  </div>
</template>

<script>
import Mobanyufa from '../components/mobanyvfa.vue';
export default {
  name: 'Home',
  components: {
    Mobanyufa

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