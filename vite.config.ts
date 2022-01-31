import { defineConfig } from 'vite'
import path from 'path';
import vue from '@vitejs/plugin-vue'
import ViteComponents, { AntDesignVueResolver } from 'vite-plugin-components';

// https://vitejs.dev/config/
export default defineConfig({
  alias: { //src目录的配置
    '/@/': path.resolve(__dirname, 'src')
  },
  plugins: [
    vue(),
    ViteComponents({
      customComponentResolvers: [AntDesignVueResolver()],
    }),
  ]
})
