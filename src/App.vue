<template>
  <div id="app">

    <router-view></router-view>
    <MainNavBar />
  </div>
</template>
<script>
import MainNavBar from '@/components/MainNavBar/MainNavBar'
export default {
  components:{
    MainNavBar
  }
}
</script>
<style lang="stylus">


</style>
