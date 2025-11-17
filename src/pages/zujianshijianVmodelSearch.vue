<template>
  <div class="zujianshijianVmodelSearch">
    搜索内容:<input tepy="text" v-model="searchText" />

  </div>
</template>
<script>
export default {
  name: 'zujianshijianVmodelSearch',
  data() {
    return {
      searchText: ''
    }
  },
  watch: {
    searchText(newValue, oldValue) {
      console.log(newValue,'++++++++++');
      console.log(oldValue,'+-----------');
      this.$emit('searchTest', newValue);
      
      
    }
  }
}
</script>