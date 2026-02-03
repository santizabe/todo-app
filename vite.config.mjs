import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react({
      jsxRuntime: 'automatic'
    })],
  server: {
    host: '0.0.0.0',
    port: 5173, // or your chosen port
  },
  base: '/todo-app/'
})
