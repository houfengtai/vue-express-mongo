<template>
  <div class="two-component">
    <p>{{entity.id}}&nbsp;&nbsp;&nbsp;{{entity.title}}&nbsp;&nbsp;&nbsp;{{msg}}</p>
  </div>
</template>
<script>
export default {
  name: 'two-component',
  props: {
    entity: Object,
    msg: String
  }
}
</script>
<style>

</style>
