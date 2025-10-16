<template>
  <div class="shuxingbangding">
    <hr>
    <h3>属性绑定</h3>
    <p :id="dynamicId" :class="dynamicClass" :title="titleaaa" :aaa="aaa">测试测试</p>
    <button :disabled="isButtonDisabled">按钮按钮</button>
    <div v-bind="objectOfAttrs">三亚学院</div>

  </div>
</template>

<script>
export default {
  name: '2Shuxingbangding',
  data() {
    return {
      dynamicId: 'id1',
      dynamicClass: 'Class1',
      titleaaa: 'title1',
      isButtonDisabled: false,
      objectOfAttrs: {
        id: 'Id2',
        class: 'Class2',

      }
    }
  }
}
</script>

<style>
.shuxingbangding {
  color: aliceblue;
}

#id1 {
  color: aqua;
}

.class1 {
  font-size: 50px;
}

.class2 {
  color: yellow;
}

#Id2 {
  font-size: 80px;
}
</style>