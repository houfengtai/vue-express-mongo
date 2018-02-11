<template>
  <div class="two-component">
    <p>{{entity.title}}&nbsp;&nbsp;&nbsp;{{msg}}</p>
  </div>
</template>
<script>
export default {
  name: 'two-component',
  props: ['entity', 'msg']
}
</script>
<style>

</style>
