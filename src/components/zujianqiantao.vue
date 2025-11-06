<template>
  <div class="zujianqiantao">
    <h3>组件嵌套</h3>
    <Header></Header>
    <Main></Main>
    <Aside></Aside>
  </div>
</template>
<script>
import Header from './header.vue';
import Main from './main.vue';
import Aside from './aside.vue';
export default {
  name: 'zujianqiantao',

  data() {
    return {
      name: '张三'
    }
  },
  components: {
    Header,
    Main,
    Aside,
  }
}
</script>
<style scoped>
.zujianqiantao {
  color: red;
  position: relative;
}
</style>