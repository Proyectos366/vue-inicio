<template>
  <form :encType="encType" :class="nuevaClase" @submit="onSubmit">
    <slot />
  </form>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  onSubmit: (e: Event) => void
  className?: string
  encType?: string
}>()

const clasePorDefecto = 'flex flex-col w-full gap-2'

const nuevaClase = computed(() =>
  props.className ? `${clasePorDefecto} ${props.className}` : clasePorDefecto
)
</script>