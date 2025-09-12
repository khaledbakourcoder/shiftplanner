import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base:"./",
  plugins: [
    tailwindcss(),
    react()],
    build:{
      outDir:"dist-react"
    },
    server:{
      port:5123,
      strictPort:true
    }
})

