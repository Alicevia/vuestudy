<template>
  <div id="app">
    <router-view></router-view>
    <MainNavBar />
  </div>
</template>
<script>
import MainNavBar from "@/components/MainNavBar/MainNavBar";
export default {
  components: {
    MainNavBar
  }
};
</script>
<style lang="stylus">
@import '~@/assets/css/reset.css'
@import '~@/assets/iconfont/iconfont.css';
body
  width 100%
  overflow hidden

</style>
