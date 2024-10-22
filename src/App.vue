<template>
  <nav>
    <router-link to="/counter">计数器</router-link>
    <router-link to="/todo">代办清单</router-link>
    <router-link to="/finance">记账应用</router-link>
  </nav>

  <router-view />
</template>

<script setup lang="ts">


</script>

<style scoped>

a {
  margin: 10px;
  text-decoration: none;
  color: rgb(51.2, 126.4, 204);
  padding: 5px 10px;
}

.router-link-active {
  background-color: rgb(51.2, 126.4, 204);
  color: white;
  font-weight: bold;
}

</style>