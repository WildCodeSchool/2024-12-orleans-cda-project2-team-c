import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/2024-12-orleans-cda-projet2-team-c/', // TODO: use the right repo name
  plugins: [react()],
});
