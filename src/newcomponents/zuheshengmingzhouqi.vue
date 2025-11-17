<template>
  <div class="zuheshengmingzhouqi">
    <hr>
    <h3>组合式---生命周期</h3>
    <p> {{ count }}</p>
    <button @click="addCount">zengjia</button>
    <hr>
  </div>


</template>

<script>
import { ref, onMounted, watch } from 'vue';
const count = ref(0);
const addCount = (e) => {
  console.log(e, '++++++++++++++');
  count.value++;
}

watch(count, async (newVal, oldVal) => {
  console.log('newVal', newVal, "oldVal", oldVal, '-------------------------');

});
onMounted(() => {

  console.log('组件渲染之后');

});

</script>

<style scoped>
.zuheshengmingzhouqi {
  color: purple;
}
</style>