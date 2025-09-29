<script setup lang="ts">
import { ref } from 'vue';

  const counter = ref(0);

  const contador = () => {
    counter.value++;
  }

  /** investigar estos conceptos
   * ref, computed, reactive, propiedades computadas
   */
</script>

<template>
  <div>
    <h1>Pagina de home</h1>
    <button type="button" @click="contador">contar ({{ counter }})</button>
  </div>
</template>

