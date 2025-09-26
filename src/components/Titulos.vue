<template>
  <component :is="`h${nivel}`" :class="computedClass">
    {{ texto }}
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

// Props tipadas
const props = defineProps<{
  nivel: 1 | 2 | 3 | 4 | 5 | 6
  texto: string
  extraClass?: string | string[] // clases adicionales opcionales
}>()

defineOptions({
  name: "Titulos",
});

// Clases base por nivel
const baseClasses: Record<1 | 2 | 3 | 4 | 5 | 6, string> = {
  1: 'text-4xl font-bold',
  2: 'text-3xl font-semibold',
  3: 'text-2xl font-medium',
  4: 'text-xl font-normal',
  5: 'text-lg',
  6: 'text-base'
}

// Clase final combinada
const computedClass = computed(() => {
  const base = baseClasses[props.nivel]
  const extra = props.extraClass
  return Array.isArray(extra) ? [base, ...extra] : [base, extra].filter(Boolean)
})
</script>