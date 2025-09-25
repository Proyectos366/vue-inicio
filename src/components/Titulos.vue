<template>
  <component :is="`h${nivel}`" :class="estilo">
    {{ texto }}
  </component>
</template>

<script setup lang="ts">
// Tipamos las props correctamente
const props = defineProps<{
  nivel: 1 | 2 | 3 | 4 | 5 | 6
  texto: string
}>()

// Usamos una función para evitar el error de indexación
const estilo = (() => {
  const clases: Record<1 | 2 | 3 | 4 | 5 | 6, string> = {
    1: 'text-4xl',
    2: 'text-2xl font-semibold mb-4 text-center text-gray-800',
    3: 'text-xl',
    4: 'text-lg',
    5: 'text-md',
    6: 'text-sm'
  }
  return clases[props.nivel]
})()
</script>