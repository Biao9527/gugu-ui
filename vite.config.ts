// @ts-nocheck
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { svgBuilder } from './src/plugins/svgBuilder.ts';
import {md} from './plugins/md';

export default defineConfig({
  plugins: [md(),vue(),svgBuilder('./src/icons/svg/')]
})
