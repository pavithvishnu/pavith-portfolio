import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Change base to '/<repo-name>/' after pushing to GitHub if using Pages
export default defineConfig({
  plugins: [react()],
  base: '/',
})
