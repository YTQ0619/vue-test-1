<template>
  <div class="biaodanshujvbanhgding">
    <hr>
    <h2>表单绑定数据</h2>
    <form>
      <input type="text" v-model.lazy="lazya"></input>
      <p>{{ lazya }}K </p>
      <p> Messageis: {{ message }}</p>
      <input v-model="message" placeholder="edit me" />
      <br>
      <input type="checkbox" id="checkbox" v-model="checked"></input>
      <label for="checkbox">{{ checked }}</label>
    </form>
    <hr>
  </div>
</template>
<script>
export default {
  name: 'biaodanshujvbangding',
  data() {
    return {
      lazya: '55555555555',
      message: '',
      checked: true
    }
  }
}
</script>
<style scoped>
.biaodanshujvbanhgding {
  color: white;
}
</style>