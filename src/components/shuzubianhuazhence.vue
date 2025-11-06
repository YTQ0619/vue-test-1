<template>
<div class="shuzubianhuazhence">
  <h3>数组变化侦测</h3>
  <button @click="addData">添加数据</button>
  <ul>
    <li v-for="(value,index) in name">{{ value }}</li>
  </ul>
  <button @click="hebingshuzu"> 合并数组</button>
  <h1>数组1</h1>
  <p v-for="(value,index) in arr1" :key="index"></p>
  <h1>数组2</h1>
  <p v-for="(value,index) in arr2" :key="index"></p>
</div>
</template>

<script>
export default {
  name: 'shuzubianhuazhence',
  data() {
    return {
      name: ['张三', '李四', '王五'],
      arr1:[1,2,3],
      arr2:[4,5,6]
    }
  },
  methods: {
    addData() {
     this.name= this.name.concat('赵六');
     console.log(this.names.concat(['赵七']));
     
    },
    hebingshuzu() {
      this.arr1=[...this]
    }
    
  }
}
</script>

<style>
.shuzubianhuazhence {
  color: blue;
}
</style>