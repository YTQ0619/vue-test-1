<template>
  <div class="zujianshijianVmodel">
    <h3>组件自定义事件</h3>
    <p>搜索内容:{{ search }}</p>
    <ZujianshijianVmodelSearch @searchTest="getmsg"></ZujianshijianVmodelSearch>
  </div>
</template>

<script>
import ZujianshijianVmodelSearch from '../pages/zujianshijianVmodelSearch.vue';
export default {
  name: 'zujianshijianVmodel',
  data() {
    return {
      search: ''
    }
  },

  components: {
    ZujianshijianVmodelSearch,
  },

  methods: {
    getmsg(data) {
      this.search = data;
      console.log(data,'+++++++++++');
    }
  }
}
</script>