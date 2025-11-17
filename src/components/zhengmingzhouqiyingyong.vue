<template>
  <div class="shengmingzhouqiyingyong">
    <h2>生命周期应用</h2>
    <!--通过ref获取元素的dom结构，模拟网络请求渲染数据
<p>通过ref获取元素的dom</p>
-->
    <p ref="name">前端开发</p>
    <p>模拟网络请求渲染数据</p>
    <ul>
      <li v-for="(value, index) in results" :key="index">
        <h3>{{ value.title }}</h3>
        <p>{{ value.gkey }}K</p>
        <img :src="value.img" :alt="value.title" />
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name:
    "shengmingzhouqiyingyong",

  data() {
    return {
      results: [],
    };
  },

  beforeCreate() {
    console.log("组件实例创建前", "beforeCreate");
  },
  
  created() {
    console.log("组件实例已创建", "created");
  },

  beforeMount() {
    console.log("组件挂载前", "beforeMount");
  },

  mounted() {
    console.log("组件已挂载", "mounted");

    this.results = [
      {
        gkey: "102094960",
        qcmsint1: "θ",
        W64: -1,
        gtype: "3",
        title: "双人游戏大全",
        url: "http://360game.360.cn/flash/102094960.html",
        gdata: '{"type":"flashgame","appid":"102094960"}',
        name: "双人游戏大全",
        img: "https://ts1.tc.mm.bing.net/th/id/OIP-C.kLs3tJ8EFQKVT5Z1VdC5EgHaE7?w=282&h=188&c=8&rs=1&qlt=90&o=6&cb=ucfimg1&pid=3.1&rm=2&ucfimg=1",
      }, {
        gkey: "102144745",
        qcmsint1: "θ",
        W64: -1,
        gtype: "3",
        title: "餐厅游戏大全",
        url: "http://360game.360.cn/flash/102144745.html",
        gdata: '{"type": "flashgamee",appid":"102144745")',
        name: "餐厅游戏大全",
        img: "https://cn.bing.com/images/search?q=%e5%9b%be%e7%89%87&id=89CA6D71D88E974386E0497B8CF2CDE5353D8B14&FORM=IQFRBA",
      }, {
        gkey: "102144642",
        qcmsint1: "0",
        W64: -1,
        gtype: "3",
        title: "火柴人游戏合集",
        url: "https://cn.bing.com/images/search?q=%e5%9b%be%e7%89%87&id=457EC80FCD5EE9AB67B2B3E8F5624312D6F6400B&FORM=IQFRBA",
        gdata: '{"type": "flashgame", "appid": "10214642"}',
        name: "火柴人游戏合集",
        img: "//p1.himg.cm/t76ec02ffd.png",
      },
    ];
  },
}
</script>
<style scoped>
.shengmingzhouqiyingyong {
  color: green;
}
</style>