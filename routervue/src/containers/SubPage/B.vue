<template lang="html">
  <div class="">
    {{ msg }}
    <button @click='clickhandler' type="button" name="button">点击</button>
  </div>
</template>

<script>
export default {
  name:'B',
  data(){
    return{
      msg:'hello world'
    }
  },
  methods:{
    clickhandler(){
      this.msg = 'hello web'
    }
  }
}
</script>

<style lang="css">
</style>
