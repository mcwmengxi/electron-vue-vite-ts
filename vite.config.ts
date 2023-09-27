import { defineConfig } from 'vite'
import path from 'node:path'
import electron from 'vite-plugin-electron/simple'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, './src'),
      },
      {
        find: 'assets',
        replacement: path.resolve(__dirname, './src/assets'),
      },
      {
        find: 'vue',
        replacement: 'vue/dist/vue.esm-bundler.js', // compile template
      },
    ],
    extensions: ['.ts', '.js', '.tsx'],
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        // 全局变量
        globalVars: {
          hack: `true; @import (reference) "${path.resolve('src/assets/breakpoint.less')}";`
        },
        // 修改变量
        // modifyVars: {
        //   hack: `true; @import (reference) "${path.resolve('src/assets/breakpoint.less')}";`
        // },
        additionalData: `@import "${path.resolve('src/assets/variable.less')}";`,
      }
    }
  },
  plugins: [
    vue(),
    electron({
      main: {
        // Shortcut of `build.lib.entry`.
        entry: 'electron/main.ts',
      },
      preload: {
        // Shortcut of `build.rollupOptions.input`.
        // Preload scripts may contain Web assets, so use the `build.rollupOptions.input` instead `build.lib.entry`.
        input: path.join(__dirname, 'electron/preload.ts'),
      },
      // Ployfill the Electron and Node.js built-in modules for Renderer process.
      // See 👉 https://github.com/electron-vite/vite-plugin-electron-renderer
      renderer: {},
    }),
  ],
})
