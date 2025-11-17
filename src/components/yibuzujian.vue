<template>
  <div class="yibuzujian">

    <h3>异步组件</h3>
    <component :is="isComponentA ? 'ComponentA' : 'ComponentB'"></component>
    <button @click="change2">切换组件2</button>
    <hr>
  </div>
</template>
<script>
import ComponentA from "../pages/componentA.vue";
//import ComponentB from"../pages/componentB.vue";
import { defineAsyncComponent } from 'vue';
const ComponentB = defineAsyncComponent(() => import('../pages/componentB.vue'));

export default {
  name: '26yibu  zujian',

  data() {
    return {
      tabComponent: 'ComponentA',
      isComponentA: true,
    }
  },
  components: {
    ComponentA,
    ComponentB,
  },
  methods: {

    change2() {
      this.isComponentA = !this.isComponentA;
    }
  }
}
</script>
<style scoped>
.yibuzujian {
  color: 1 Oblue;
}
</style>