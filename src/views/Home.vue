<template>
  <div className="container mx-auto min-h-dvh rounded-md  flex items-center justify-center gap-4 px-2">
    <section className="flex flex-col items-center justify-center gap-4 min-h-[200px] sm:max-w-[400px] md:max-w-[600px] w-full bg-white border border-gray-300 rounded-md shadow-lg p-4">
      <ImagenLogin indice="login" />
    </section>
  </div>
</template>

<script setup lang="ts">
import ImagenLogin from '../components/ImagenLogin.vue'

  defineOptions({
    name: "Home",
  });
</script>

<style></style>
