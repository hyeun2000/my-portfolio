import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

/** GitHub Pages 배포 경로: https://hyeun2000.github.io/my-portfolio/ */
export default defineConfig({
  plugins: [react()],
  base: '/my-portfolio/',
});
