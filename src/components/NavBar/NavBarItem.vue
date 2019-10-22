<template>
  <router-link :to="path" tag="div" 
  :style='showIcon?{}:activeClass'
  class="nav-bar-item">
    <div class="icon " v-if="showIcon" >
      <slot name="icon"></slot>
    </div>
    <div class="icon" v-else>
      <slot name="active-icon"></slot>
    </div>
    <div class="nav-bar-title">
      <slot name="title"></slot>
    </div>
  </router-link>
</template>

<script>
export default {
  props:{
    path:{
      type:String,
      required:true,
      default:'/'
    },
    activeClass:{
      type:Object
    }
  },
  data() {
    return {};
  },

  computed: {
    showIcon(){
      //默认为true，没有显示active
      return this.$route.path.indexOf(this.path)===-1?true:false
    }
  },

  mounted() {},

  methods: {
    changeRouter(){
      console.log(this.path)
      this.$router.push(this.path)
    }
  },

  components: {}
};
</script>
<style lang='stylus' scoped>
.nav-bar-item
  flex 1
  text-align center
  box-sizing border-box
  padding-top 4px
  font-size 14px
  &.active
    background-color #fff
    color green
  .icon
    font-size 16px
  .nav-bar-title
    margin-top 1px

 

</style>