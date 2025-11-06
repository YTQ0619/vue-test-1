<template>
  <div class="classbangding">
    <h3>class动态绑定</h3>
    <p :class="myclass">1111111111</p>
    <h5>动态绑定对象示例</h5>
    <p :class="{ 'active': isActive, 'text-danger': hasError }">class绑定样式1</p>
    <p :class="classobject">class样式绑定2</p>
    <h5>动态绑定数组示例</h5>
    <p :class="[arrActive, arrHasError]">class样式绑定3</p>
    <p :class="[isActive ? 'active' : '']">class样式绑定4</p>
    <!-- 数组和对象一起嵌套使用的时候，只能是数组嵌套对象，不能是对象嵌套数组-->
    <p :class="[isActive ? 'active' : '', { 'text-danger': hasError }]">class样式绑定5</p>
  </div>
</template>
<script>
export default {
  name: 'classbangding',

  data() {
    return {
      myclass: 'demo',
      isActive: true,
      hasError: true,
      classobject: {
        'active': true,
        'text-danger': true
      },

      arrActive: 'active',
      arrHasError: 'text-danger'
    }
  }
}
</script>
<style scoped>
.classbangding {
  color: slateblue;
}

.active {
  font-size: 35px;
}

.text-danger {
  color:
    red;
}
</style>