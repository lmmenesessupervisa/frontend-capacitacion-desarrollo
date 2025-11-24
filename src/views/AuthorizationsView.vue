<template>
  <div class="bg-white p-6 rounded shadow max-w-3xl">
    <h2 class="text-lg font-semibold mb-4">Autorizar persona</h2>

    <form @submit.prevent="submit">
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="block text-sm">Cédula</label>
          <input v-model="form.identification_number" class="mt-1 input" required />
        </div>
        <div>
          <label class="block text-sm">Nombres</label>
          <input v-model="form.first_name" class="mt-1 input" required />
        </div>

        <div>
          <label class="block text-sm">Apellidos</label>
          <input v-model="form.last_name" class="mt-1 input" required />
        </div>
        <div>
          <label class="block text-sm">Hora inicial</label>
          <input v-model="form.start_time" placeholder="08:00" class="mt-1 input" required />
        </div>

        <div>
          <label class="block text-sm">Empresa origen</label>
          <input v-model="form.company_origin" class="mt-1 input" />
        </div>
        <div>
          <label class="block text-sm">Hora final</label>
          <input v-model="form.end_time" placeholder="18:00" class="mt-1 input" required />
        </div>
      </div>

      <div class="mt-4">
        <button class="px-4 py-2 bg-green-600 text-white rounded">Autorizar</button>
        <span v-if="message" class="ml-4 text-sm text-green-700">{{ message }}</span>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { api } from '../services/api'

const form = ref({
  identification_number: '',
  first_name: '',
  last_name: '',
  start_time: '',
  end_time: '',
  company_origin: ''
})

const message = ref('')

async function submit() {
  try {
    await api.post('/authorizations', form.value)
    message.value = 'Autorización registrada'
    // limpiar
    form.value = { identification_number: '', first_name:'', last_name:'', start_time:'', end_time:'', company_origin:'' }
  } catch (e) {
    console.error(e)
    message.value = 'Error al registrar'
  }
}
</script>

<style scoped>
.input { width:100%; border:1px solid #e5e7eb; padding:.5rem; border-radius:.375rem }
</style>
