<template>
  <div class="zuhezhentinqi">
    <h3>组合式---watch侦听</h3>
    <p>{{ count }}</p>
    <button @click="addCount">增加</button>
    <hr>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const count = ref(0);

const addCount = (e) => {
  console.log(e, '++++++++++++++');
  count.value++;
};

// 侦听count的变化
watch(count, (newValue, oldValue) => {
  console.log('count从', oldValue, '变为', newValue);
});
</script>

<style scoped>
.zuhezhentinqi {
  color: red;
}
</style>