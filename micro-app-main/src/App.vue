<script setup lang="ts">
import { ref } from 'vue';

let appUrl = ref('http://localhost:9090');
</script>

<template>
  Hello from main app:
  <micro-app
    iframe
    router-mode="pure"
    name="app"
    :url="appUrl"
    inline
    disable-scopecss
  ></micro-app>
</template>

<style scoped></style>
