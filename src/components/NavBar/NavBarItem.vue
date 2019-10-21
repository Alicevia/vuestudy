<template>
  <div class="nav-bar-item" @click="changeRouter">
    <div class="icon">
      <slot name="icon"></slot>
    </div>
    <div class="active-icon">
      <slot name="active-icon"></slot>
    </div>
    <div class="nav-bar-title">
      <slot name="title"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    path:{
      type:String
    }
  },
  data() {
    return {};
  },

  computed: {},

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
  padding-top 6px
</style>