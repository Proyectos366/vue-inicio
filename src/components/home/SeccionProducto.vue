<script setup lang="ts">
import GalleryImg from '../GalleryImg.vue';
import Section from '../padres/Section.vue';
import DetallesProducto from './DetallesProducto.vue';


</script>

<template>
  <Section class="flex gap-2 my-16">
    <GalleryImg class="basis-[50%]" />
    <DetallesProducto class="basis-[50%]" />
  </Section>
</template>
