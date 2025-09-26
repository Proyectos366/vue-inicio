<template>
  <img
    :src="src"
    :alt="alt"
    :class="['', extraClase]"
    loading="lazy"
    @error="onError"
  />
</template>

<script setup lang="ts">
const props = defineProps<{
  src: string;
  alt?: string;
  extraClase?: string | string;
}>();

const onError = (event: Event) => {
  const img = event.target as HTMLImageElement;
  img.src = "/img/fondo.png";
};
</script>
