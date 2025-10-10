<script setup lang="ts">
import { ref } from "vue";

import img1 from "@/assets/img/image-product-1.jpg";
import img2 from "@/assets/img/image-product-2.jpg";
import img3 from "@/assets/img/image-product-3.jpg";
import img4 from "@/assets/img/image-product-4.jpg";
import Img from "@/components/padres/Img.vue";
import Div from "@/components/padres/Div.vue";

const images = [img1, img2, img3, img4];

const activeImage = ref(images[0]);
</script>

<template>
  <Div class="flex flex-col items-center w-full me-14">
    <!-- Imagen principal -->
    <Div class="ps-10">
      <Img :src="activeImage" class="max-h-[350px] w-full rounded-lg shadow" />

      <!-- Miniaturas adaptativas -->
      <Div class="grid grid-cols-4 gap-2 mt-4 w-full">
        <Div
          v-for="img in images"
          :class="{
            ' rounded-lg border-2 border-orange-500 opacity-70':
              img === activeImage,
          }"
        >
          <Img
            :key="img"
            :src="img"
            class="aspect-square object-cover cursor-pointer rounded-lg transition-transform duration-200 ease-in-out hover:scale-105"
            :class="{
              'opacity-50': img === activeImage,
            }"
            @click="activeImage = img"
          />
        </Div>
      </Div>
    </Div>
  </Div>
</template>
