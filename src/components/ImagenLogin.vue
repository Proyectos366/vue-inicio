<template>
  <div class="w-full flex items-center justify-between sm:justify-center gap-2">
    <img class="w-16 object-cover" src="/img/fondo.png" alt="Logo cmz en el registro de usuario" />

    <div class="flex flex-col">
      <Titulos :nivel="6" texto="Contraloría municipio zamora del estado Aragua"
        class="text-[#082158] hidden sm:block text-center" />

      <Titulos :nivel="6" :texto="indice === 'usuario' ? 'Registro de usuario' : 'Entrar al sistema'"
        class="text-[#082158] text-xl hidden sm:block uppercase text-center" />
    </div>

    <img class="w-18 object-cover" src="/img/logo2.png" alt="Logo snf que acompaña el registro de usuario" />
  </div>
</template>

<script setup lang="ts">
  import Titulos from './Titulos.vue';

  defineOptions({
    name: 'ImagenLogin',
  })

  defineProps<{
    indice: string
  }>()
  
</script>

<style scoped>
/* Puedes agregar estilos aquí si lo deseas */
</style>