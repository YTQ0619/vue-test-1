<template>
  <div class="mobanyufa">
    <!-- 模板内容 -->
    <p>{{ msg }}</p>
    <p>{{ Number + 100 }}</p>
    <div>{{ !ok ?"ok1" :"ok2" }}</div>
    <div>{{ rawHTML }}</div>
    <div v-html="rawHTML"></div>
  </div>
</template>

<script>
export default {
  name: 'MobanYvfa',
  data() {
    return {
      msg: 'Hello, World!',
      Number: 1,
      ok: true,
      rawHTML: '<a href="https://www.baidu.com/">百度</a>',
    };
  },
}
</script>

<style scoped>
.mobanyufa {
  color: yellow;
}
/* 样式内容 */
</style>