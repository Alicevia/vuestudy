<template>
  <div class="main-nav-bar">
    <NavBar>
      <NavBarItem path='/home' :activeClass="activeClass">
        <span class="iconfont icon-homepage" slot="icon"></span>
        <span class="iconfont icon-homepageclick" slot="active-icon"></span>
        <div slot="title">首页</div>
      </NavBarItem>
      <NavBarItem path='/category'>
        <span class="iconfont icon-order" slot="icon"></span>
        <span class="iconfont icon-orderclick" slot="active-icon"></span>

        <div slot="title">分类</div>
      </NavBarItem>
      <NavBarItem  path='/shopcart'>
        <span class="iconfont icon-gouwuchexiantiao" slot="icon"></span>
        <span class="iconfont icon-gouwuchetianchong" slot="active-icon"></span>

        <div slot="title">购物车</div>
      </NavBarItem>
      <NavBarItem  path='/profile'>
        <span class="iconfont icon-personalcenter" slot="icon"></span>
        <span class="iconfont icon-personalcenterclick" slot="active-icon"></span>

        <div slot="title">我的</div>
      </NavBarItem>
    </NavBar>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar/NavBar";
import NavBarItem from "@/components/NavBar/NavBarItem";

export default {
  data() {
    return {
      activeClass:{
        backgroundColor:'white',
        color:'green'
      }
    };
  },

  computed: {},

  mounted() {},

  methods: {},

  components: {
    NavBar,
    NavBarItem
  }
};
</script>
<style lang='stylus' scoped>
.main-nav-bar
  position fixed
  bottom 0
  width 100%
  height 49px
  background-color #ddd
</style>