import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
 
export default defineConfig({
  plugins: [vue()],
  base: '/web/',
  build: {
    outDir: 'docs'
  },
  server: {
    port: 3000,
  }

})
