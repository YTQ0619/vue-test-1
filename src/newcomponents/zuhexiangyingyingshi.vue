<template>
  <div class="zuhexiangyingyingshi">
    <hr>
    <h3>组合式API响应</h3>
    <p>{{ msg }}</p>
    <p>{{ asas }}</p>
    <p>{{ state.ok ? "ok1" : "ok2" }}</p>
    <p>{{ msg.split('').reverse().join('') }}</p>
    <p>{{ state.rawHtml }}</p>
    <p v-html="state.rawHtml"></p>
    <hr>

  </div>

</template>

<script setup>
import { ref, reactive } from 'vue'

const msg = ref('Hello Vue 3 Composition API!')
const asas = ref(12222)
const state = reactive({
  ok: true,
  rawHtml: '<a href="https://www.baidu.com">这是一个链接</a>'
})
</script>

<style scoped>
.zuhexiangyingyingshi{
  color: lightgreen;
}
</style>