import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: '/web_main/',
  publicDir: 'public',
  plugins: [vue()], 
  build: {
    outDir: 'docs'
  },
  server: {
    port: 3000,
  }

})
