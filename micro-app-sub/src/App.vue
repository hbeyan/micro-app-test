<script setup lang="ts"></script>
<template>
  <div class="content">
    Hello from sub app:
    <my-button>Button</my-button>
    <my-card>Card</my-card>
  </div>
</template>

<style scoped>
.content {
  background-color: white;
  color: black;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
