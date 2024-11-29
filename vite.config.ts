import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import path from 'path';
import vitePluginImp from 'vite-plugin-imp';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vitePluginImp({
    libList: [
      {
        libName: '@nutui/nutui-react',
        style: (name) => {
          return `@nutui/nutui-react/dist/esm/${name}/style/css`;
        },
        replaceOldImport: false,
        camel2DashComponentName: false,
      },
    ],
  })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // 新增 css 配置
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
});