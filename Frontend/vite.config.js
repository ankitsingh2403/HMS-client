import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy: {
      '/': {
        target: 'https://hms-client.onrender.com',
        changeOrigin: true,
      },
    },
  },
  plugins: [react()],
})