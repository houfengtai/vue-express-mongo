<template>
  <div id='first-component'>
    <p>{{message}}</p>
    <ul>
      <li v-for='article in articles'>
        <two-component v-bind:msg="message" v-bind:entity="article"></two-component>
      </li>
    </ul>
    <input v-model="message"/>
    <button v-on:click="reverseMessage">逆转消息</button>
  </div>
</template>
<script src="./js/first-component.js">
</script>
<style scoped>

</style>
