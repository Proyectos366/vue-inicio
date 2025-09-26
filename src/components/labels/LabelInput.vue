<template>
  <label class="block w-full">
    <span class="text-gray-700 font-medium">{{ nombre }}:</span>
    <slot />
  </label>
</template>

<script setup lang="ts">
const props = defineProps<{
  nombre: string;
}>();
</script>
