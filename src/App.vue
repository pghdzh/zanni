<template>
  <div id="app">
    <navbar />

    <main class="main-content">
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import navbar from "@/components/navbar.vue";
</script>

<style scoped lang="scss">
#app {
  position: relative;
  min-height: 100vh;
}
</style>
