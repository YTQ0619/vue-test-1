<template>
<div class="zuhemobangyingyong">
  <h3>组合式---模板引用</h3>
  <p ref="message">mobanyingyong</p>
</div>

</template>

<script>
import { ref, onMounted } from 'vue';
const message = ref(null);
onMounted(() => {
  message.value.style.color = 'Aqua';
  message.value.style.fontSize = '30px';
  message.value.innerHTML = '++++++++123456++++++++';
});

</script>
<style scoped>
.zuhemobangyingyong{
  color: lightgreen;
}
</style>
