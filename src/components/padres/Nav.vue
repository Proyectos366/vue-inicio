<script setup lang="ts">
import type { VNode } from 'vue'

interface Slots {
  default?: () => VNode[]
}

defineSlots<Slots>()
</script>

<template>
  <nav class="flex justify-between items-center w-full">
    <slot />
  </nav>
</template>