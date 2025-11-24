// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })
const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: "0.0.0.0",        // Permite acceso desde la red
    port: 8080,             // Puerto del servidor
    allowedHosts: "all",    // Evita problemas con WSL2
    client: {
      webSocketURL: "ws://0.0.0.0:8080/ws" // Soluciona error WebSocket
    }
  },

  pages: {
    index: {
      entry: 'src/main.js',          // ← mantiene el arranque correcto
      title: 'Superaccess - Control de Acceso', // ← cambia el título
    }
  }

})
