<template>
  <div id='first-component'>
    <p>{{message}}</p>
    <ul>
      <li v-for='article in articles'>
        <two-component v-demo="{ color: 'white', text: 'hello!' }" v-bind:msg="message" v-bind:entity="article"></two-component>
      </li>
    </ul>
    <p>{{_getType}}</p>
    <p v-if="Math.random() > 0.5">出现的随机数大于0.5</p>
    <p v-else>出现的随机数小于0.5</p>
    <input v-model="message"/>
    <!--<input v-model="orderType"/>-->
    <label>java
      <input type="radio" v-model="orderType" name="zs" value="1"/>
    </label>
    <label>node.js
      <input type="radio" v-model="orderType" name="zs" value="2"/>
    </label>
    <label>vue
      <input type="radio" v-model="orderType" name="zs" value="3"/>
    </label>
    <button v-on:click="reverseMessage">逆转消息</button>
  </div>
</template>
<script src="./js/first-component.js">
</script>
<style scoped>

</style>
