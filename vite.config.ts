// @ts-nocheck
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { svgBuilder } from './src/plugins/svgBuilder.ts';

export default defineConfig({
  plugins: [vue(),svgBuilder('./src/icons/svg/')]
})
