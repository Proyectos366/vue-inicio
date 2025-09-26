<template>
  <input
    :type="type"
    :id="id"
    :name="name"
    :disabled="disabled"
    :class="finalClass"
    :placeholder="placeholder"
    :autocomplete="autocomplete"
    :readonly="readonly"
    :ref="inputRef"
    :max="max"
    :value="modelValue"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    @keydown="onKeydown"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  modelValue: string | number
  type?: string
  id?: string
  name?: string
  disabled?: boolean
  placeholder?: string
  autocomplete?: string
  readonly?: boolean
  inputRef?: string
  max?: string | number
  onKeydown?: (e: KeyboardEvent) => void
  extraClass?: string | string[]
  indice?: string
}>()

const finalClass = computed(() => {
  const base = props.indice === 'clave' || props.indice === 'clave2' ? '' : 'uppercase'
  const core = `${base} block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-[#082158] focus:border-0 hover:border hover:border-[#082158] focus:outline-none transition-all`
  return Array.isArray(props.extraClass)
    ? [core, ...props.extraClass]
    : [core, props.extraClass].filter(Boolean)
})
</script>