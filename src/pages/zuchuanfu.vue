<template>
  <div class="zuchuanfu">
    <h3>child</h3>
    <button @click="clickmsg">click me</button>
    

  </div>
</template>
<script>
export default {
  name: 'zuchuanfu',
  data() {
    return {
      msg:'这是子组件'
    }
  },
  methods: {
    clickmsg() {
      this.$emit('semoEvent', this.msg);
    }
  }
}
</script>

<style scoped>
  .zuchuanfu {
    color: red;
  }
</style>