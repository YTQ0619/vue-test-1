<template>
  <div class="chachaoslots">
    <hr>
    <h3>插槽1</h3>
    
    <slotsBase>
      <div>
        <h4>插槽1标题</h4>
        <p>插槽1内容</p>
      </div>
    </slotsBase>
    <hr>
    <h3>插槽2</h3>
    <Slotsxu>
     <template #header>
      <h5>插槽2标题</h5>
     </template>
     <template #content>
      <p>{{ msg }}</p>
     </template>
    </Slotsxu>

  </div>
</template>

<script>
import slotsBase from '../pages/slotsBase.vue';
import Slotsxu from '../pages/slotsxu.vue';
export default {
  name: 'chachaoslots',
  components: {
    slotsBase,
    Slotsxu,
  },
  data() {
    return {
      msg: 'hello word',
    };
  },
};
</script>

<style scoped>
.chachaoslots {
  color: red;
}
</style>
