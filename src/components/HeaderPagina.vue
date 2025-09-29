<script setup lang="ts">
import CarritoSvg from "./CarritoSvg.vue";
import Div from "./padres/Div.vue";
import Header from "./padres/Header.vue";
import Img from "./padres/Img.vue";
import Li from "./padres/Li.vue";
import Nav from "./padres/Nav.vue";
import Ul from "./padres/Ul.vue";
import imgUserLogin from "@/assets/img/image-avatar.png";
</script>

<template>
  <Header class="border-b border-gray-200 pt-4">
    <Nav>
      <Ul class="flex flex-row items-center gap-4 mb-10">
        <Li class="text-2xl font-semibold me-4">sneakers</Li>
        <Li class="text-xs text-gray-500 border-b-2 py-1 flex"
          ><RouterLink to="#">Collections</RouterLink></Li
        >
        <Li class="text-xs text-gray-500">Men</Li>
        <Li class="text-xs text-gray-500">Women</Li>
        <Li class="text-xs text-gray-500">Contact</Li>
      </Ul>

      <Div class="flex items-center gap-8">
        <Div class="opacity-60">
          <CarritoSvg />
        </Div>

        <Div>
          <Img
            class="w-8"
            :src="imgUserLogin"
            alt="Imagen de usuario al iniciar sesion"
          />
        </Div>
      </Div>
    </Nav>
  </Header>
</template>
