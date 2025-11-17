<template>
  <div class="shengmingzhouqi">
    <hr>
    <h3>组件生命周期</h3>
    <p>{{ msg }}</p>
    <button @click="upadteMsg">更新数据</button>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'shengmingzhouqi',
  data() {
    return {
      msg: '更新之前'
    }
  },
  methods: {
    upadteMsg() {
      this.msg = '更新之后';
    }
  },
  beforeCreate() {
    console.log('组件创建之前');
  },
  created() {
    console.log('组件创建之后');
  },
  beforeMount() {
    console.log('组件渲染之前');
  },
  mounted() {
    console.log('组件渲染之后');
  },
  beforeUpdate() {
    console.log('组件更新之前');
  },
  updated() {
    console.log('组件更新之后');
  },
  beforeUnMount() {
    console.log('组件销毁之前');
  },
  unMounted() {
    console.log('组件销毁之后');
  },
}
</script>

<style scoped>
.shengmingzhouqi {
  color: aqua;
}
</style>