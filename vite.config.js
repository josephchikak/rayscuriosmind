import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';
import glsl from 'vite-plugin-glsl'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), glsl()],
  define: {
    'process.env': process.env
  },
  assetsInclude:['**/*.JPG', '**/*.jpg', '**/*.png', '**/*.svg', '**/*.vert', '**/*.vs', '**/*.fs', '**/*.glb', "**/*.hdr", '**/*.PNG',],

})

