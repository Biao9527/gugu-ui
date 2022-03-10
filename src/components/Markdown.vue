<template>
  <article class="markdown-body article" v-html="content">
  </article>
</template>

<script lang="ts">
export default {
  props:{
    content:{
      type:String,
      required:true
    }
  },
}
</script>
<style lang="scss">
.article{
margin: 0 20px;
}
</style>