<template>
  <div class="space-y-2 relative">
    <Input
      :modelValue="modelValue"
      @update:modelValue="handleInput"
      type="email"
      :id="id"
      :name="name"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      :readonly="readonly"
      :disabled="disabled"
      :ref="inputRef"
      :max="max"
      :extraClass="extraClass"
      indice="email"
      :onKeydown="onKeydown"
    />
    <div v-if="modelValue && !correoValido" class="text-red-500 text-sm mt-1">
      Formato inválido
    </div>
  </div>
</template>

<script setup lang="ts">
import Input from './Input.vue'
import { emailRegex } from '../../utils/regex/emailRegex'

const {
  modelValue,
  correoValido,
  onValidacionCorreo,
  id,
  name,
  placeholder,
  autocomplete,
  readonly,
  disabled,
  inputRef,
  max,
  extraClass,
  onKeydown
} = defineProps<{
  modelValue: string
  correoValido: boolean
  onValidacionCorreo: (valido: boolean) => void
  id?: string
  name?: string
  placeholder?: string
  autocomplete?: string
  readonly?: boolean
  disabled?: boolean
  inputRef?: string
  max?: string | number
  extraClass?: string | string[]
  onKeydown?: (e: KeyboardEvent) => void
}>()

const emit = defineEmits<{ (e: 'update:modelValue', value: string): void }>()

function handleInput(value: string) {
  emit('update:modelValue', value)
  onValidacionCorreo(emailRegex.test(value))
}
</script>