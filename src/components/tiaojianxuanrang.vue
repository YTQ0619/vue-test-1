<template>
  <div class="tiaojianxuanrang">
    <hr>
    <h3>条件渲染</h3>
    <div v-if="flag">看见我吧</div>
    <div v-else> 没看见我把</div>
    <div v-if="type === 'A'">A</div>
    <div v-else-if="type === 'B'">B</div>
    <div v-else-if="type === 'C'">C</div>
    <div v-else>D</div>
    <div v-show="flag1">看就看吧</div>
  </div>

</template>

<script>
export default {
  name: '3tiaojianxuanrang',
  data() {
    return {
      flag: false,
      type: 'B',
      flag1: false
    }
  }
}
</script>

<style>
.tiaojianxuanrang{
  color: purple;}
</style>