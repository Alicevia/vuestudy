<template>
  <div class="main-nav-bar">
    <NavBar>
      <NavBarItem>
        <span class="iconfont icon-homepage" slot="icon"></span>
        <div slot="title">首页</div>
      </NavBarItem>
      <NavBarItem>
        <span class="iconfont icon-order" slot="icon"></span>
        <div slot="title">分类</div>
      </NavBarItem>

      <NavBarItem>
        <span class="iconfont icon-gouwuchexiantiao" slot="icon"></span>

        <div slot="title">购物车</div>
      </NavBarItem>
      <NavBarItem>
        <span class="iconfont icon-personalcenter" slot="icon"></span>
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
    return {};
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
  background-color pink
</style>