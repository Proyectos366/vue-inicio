<template>
  <h1 class="text-blue-500">Hola mundo, mi primer proyecto en vue!</h1>
</template>

<script setup lang="ts">
  // No necesitas export default aquí.
  // La lógica y el estado se declaran directamente.
  import { defineOptions } from 'vue';

  defineOptions({
    name: 'Home'
  });
</script>

<style></style>