<template>
  <div class="zujianshijian">
    <hr>
    <h3>组件自定义事件</h3>
    <zichuanfu @semoEvent="getmsg"></zichuanfu>
    <p>子组件传递过来的消息：{{ message }}</p>

  </div>
</template>
<script>
import Zichuanfu from '../pages/zuchuanfu.vue';
export default {
  name: 'zujianshijian',

  data() {
    return {
      message: ''
    }
  },
  components: {
    Zichuanfu,
  },
  methods: {
    getmsg(data) {
      this.message = data;
      console.log(data);

    }
  }
}
</script>

<style scoped>
.zujianshijian {

  color: red;

}
</style>