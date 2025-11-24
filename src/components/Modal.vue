<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div v-if="props.show" class="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
    <div class="bg-white rounded p-6 w-full max-w-md">
      <slot />
      <div class="mt-4 text-right">
        <button @click="$emit('close')" class="px-4 py-2 bg-blue-600 text-white rounded">Aceptar</button>
      </div>
    </div>
  </div>
</template>

<script setup>
/* eslint-disable no-undef */
const props = defineProps({
  show: Boolean
})
</script>
