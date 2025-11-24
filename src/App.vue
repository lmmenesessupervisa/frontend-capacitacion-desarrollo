<template>
  <div class="min-h-screen flex flex-col">
    <TheHeader />
    <div class="flex flex-1">
      <TheSidebar />
      <main class="flex-1 p-6 bg-gray-50">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import TheHeader from './components/TheHeader.vue'
import TheSidebar from './components/TheSidebar.vue'
</script>
