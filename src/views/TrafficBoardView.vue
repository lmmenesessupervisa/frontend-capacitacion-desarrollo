<template>
  <div>
    <h2 class="text-lg font-semibold mb-4">Tablero de tráfico</h2>

    <div class="bg-white rounded shadow overflow-auto">
      <table class="min-w-full">
        <thead class="bg-gray-100">
          <tr>
            <th class="px-3 py-2 text-left">Cédula</th>
            <th class="px-3 py-2 text-left">Nombre</th>
            <th class="px-3 py-2 text-left">Apellido</th>
            <th class="px-3 py-2 text-left">Fecha y hora</th>
            <th class="px-3 py-2 text-left">Sentido</th>
            <th class="px-3 py-2 text-left">Placa</th>
            <th class="px-3 py-2 text-left">Mensaje</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="m in movements" :key="m.id" class="border-t hover:bg-gray-50">
            <td class="px-3 py-2">{{ m.authorization.person.identification_number }}</td>
            <td class="px-3 py-2">{{ m.authorization.person.first_name }}</td>
            <td class="px-3 py-2">{{ m.authorization.person.last_name }}</td>
            <td class="px-3 py-2">{{ m.create_time }}</td>
            <td class="px-3 py-2">{{ m.way === 1 ? 'Entrada' : 'Salida' }}</td>
            <td class="px-3 py-2">{{ m.vehicle_plate || '-' }}</td>
            <td class="px-3 py-2">{{ m.message }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { api } from '../services/api'

const movements = ref([])

async function load() {
  try {
    const res = await api.get('/movements/today')
    movements.value = res.data
  } catch (e) {
    console.error(e)
  }
}

onMounted(load)
</script>
