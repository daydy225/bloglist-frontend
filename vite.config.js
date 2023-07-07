/* eslint-disable linebreak-style */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    babel: {
      // presets: [...],
      // Your plugins run before any built-in transform (eg: Fast Refresh)
      plugins: ['@babel/plugin-syntax-jsx'],
      // Use .babelrc files
      babelrc: true,
      // Use babel.config.js files
      configFile: true,
    }
  })],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:3003',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
