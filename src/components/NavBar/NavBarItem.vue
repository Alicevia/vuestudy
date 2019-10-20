<template>
  <div class="nav-bar-item">
    
    <slot name="icon"></slot>
    <slot name="active-icon"></slot>
    <slot name="title"></slot>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },

  computed: {},

  mounted(){},

  methods: {},

  components: {},
}

</script>
<style lang='stylus' scoped>
.nav-bar-item
  flex 1
  text-align center
  box-sizing border-box
  padding-top 6px

</style>