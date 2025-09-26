<template>
  <div
    class="container mx-auto min-h-dvh rounded-md flex items-center justify-center gap-4 px-2"
  >
    <section
      class="flex flex-col items-center justify-center gap-4 min-h-[200px] sm:max-w-[400px] md:max-w-[600px] w-full bg-white border border-gray-300 rounded-md shadow-lg p-4"
    >
      <HeaderHome indice="login" />
      <FormularioBase
        :onSubmit="enviarFormulario"
        className="bg-white p-4 rounded-md"
      >
        <LabelInput nombre="Correo">
          <InputCorreo
            v-model="correo"
            :correoValido="correoValido"
            :onValidacionCorreo="validarCorreo"
            id="email"
            name="email"
            placeholder="Ingresa tu correo"
          />
        </LabelInput>
      </FormularioBase>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

import FormularioBase from "../components/formularios/FormularioBase.vue";
import HeaderHome from "../components/home/HeaderHome.vue";
import InputCorreo from "../components/inputs/InputCorreo.vue";
import LabelInput from "../components/labels/LabelInput.vue";

defineOptions({ name: "Home" });

const correo = ref("");
const correoValido = ref(true);

function validarCorreo(valido: boolean) {
  correoValido.value = valido;
}

watch(correo, (nuevoValor) => {
  console.log(nuevoValor);
});

function enviarFormulario(e: Event) {
  e.preventDefault();
  // lógica de envío aquí
}
</script>
