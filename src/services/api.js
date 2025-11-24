import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3000' // tu backend Rails
})

// wrapper para manejar errores básicos
export async function safeGet(url, config) {
  try {
    const r = await api.get(url, config)
    return r.data
  } catch (e) {
    console.error('API GET error', url, e)
    throw e
  }
}
