<template>
  <div class="zuhejisuanshuxing">
    <h3>组合式---计算属性</h3>
    <p>{{ message }}</p>
    <p>{{ userInfo.name }}</p>
    <p>{{ reverseMessage }}</p>
    <p>{{ reverseUserInfoName }}</p>
    <p>{{ demo }}</p>
    <hr>
  </div>
</template>
<script setup>
import { ref, reactive, computed } from 'vue';
import { myDemo } from '../utlis/computedUtils';
const message = ref("adadsadsad")
const userInfo = reactive({
  name: "张三",
  age: 18,
  sex: "男"
});

const reverseMessage = computed(() => {
  //注意：message在逻辑里面读取的时候(script)，必须通过.value才能读取到值
  return message.value.split("").reverse().join("");
});

const reverseUserInfoName = computed(() => {
  return userInfo.name.split("").reverse().join("");
});
const demo = myDemo(message);
</script>
<style scoped>
.zuhejisuanshuxing {
  color: red;
}
</style>