<template>
  <aside class="w-56 bg-gray-50 border-r min-h-screen p-4">
    <nav class="space-y-2">
      <router-link to="/authorizations" class="block px-3 py-2 rounded hover:bg-gray-100" :class="active('/authorizations')">Autorizaciones</router-link>
      <router-link to="/register" class="block px-3 py-2 rounded hover:bg-gray-100" :class="active('/register')">Movimientos</router-link>
      <router-link to="/traffic" class="block px-3 py-2 rounded hover:bg-gray-100" :class="active('/traffic')">Tablero de tráfico</router-link>
    </nav>
  </aside>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
const active = (path) => route.path === path ? 'bg-white shadow' : ''
</script>
