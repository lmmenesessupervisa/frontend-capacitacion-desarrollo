<template>
  <div class="bg-white p-6 rounded shadow max-w-2xl">
    <h2 class="text-lg font-semibold mb-4">Registrar acceso</h2>

    <form @submit.prevent="doRegister" class="flex items-end gap-4">
      <div class="flex-1">
        <label class="block text-sm">Cédula</label>
        <input v-model="cedula" class="mt-1 input" required />
      </div>

      <div class="flex-1">
        <label class="block text-sm">Placa (Opcional)</label>
        <input v-model="placa" class="mt-1 input" placeholder="ABC123" />
      </div>

      <div class="w-44">
        <label class="block text-sm">Sentido</label>
        <select v-model="sentido" class="mt-1 input">
          <option :value="1">Entrada</option>
          <option :value="2">Salida</option>
        </select>
      </div>

      <div class="w-36">
        <button class="px-4 py-2 bg-blue-600 text-white rounded">Registrar</button>
      </div>
    </form>

    <Modal :show="showModal" @close="showModal = false">
      <div class="text-center">
        <p class="text-lg font-medium">{{ modalMessage }}</p>
      </div>
    </Modal>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { api } from '../services/api'
import Modal from '../components/Modal.vue'

const cedula = ref('')
const placa = ref('')
const sentido = ref(1)
const showModal = ref(false)
const modalMessage = ref('')

async function doRegister() {
  modalMessage.value = ''
  try {
    const res = await api.post('/movements', {
      identification_number: cedula.value,
      way: sentido.value,
      vehicle_plate: placa.value // opcional; podrías agregar input
    })
    // el backend responde con message o movement
    modalMessage.value = res.data?.message || res.message || 'Registro exitoso'
  } catch (e) {
    // si el backend devuelve {error: "..."} lo mostramos
    modalMessage.value = e.response?.data?.message || e.response?.data?.error || 'Error al registrar'
  } finally {
    showModal.value = true
    // limpiar campos
    cedula.value = ''
     placa.value = ''
  }
}
</script>

<style scoped>
.input { width:100%; border:1px solid #e5e7eb; padding:.5rem; border-radius:.375rem }
</style>
