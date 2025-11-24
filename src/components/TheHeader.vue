<template>
  <header class="bg-white border-b shadow-sm">
    <div class="max-w-6xl mx-auto flex items-center gap-4 p-4">
      <img :src="logo" class="w-auto h-10" alt="logo" />
      <h1 class="text-xl font-bold">Software de control de acceso</h1>
    </div>
  </header>
</template>

<script setup>
const logo = require('@/assets/logo_superaccess.png')
</script>

<style scoped>
/* small header cosmetics if needed */
</style>
