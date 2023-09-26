import { mergeConfig } from 'vite';
import baseConfig from './vite.config.base';
import configAntdResolverPlugin from './plugin/antdResolver'
import configCompressPlugin from './plugin/compress';
import configVisualizerPlugin from './plugin/visualizer';

export default mergeConfig({
  mode: 'production',
  base: './',
  plugins: [
    configCompressPlugin('gzip'),
    configVisualizerPlugin(),
    configAntdResolverPlugin(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          antd: ['ant-design-vue'],
          vue: ['vue', 'vue-router', 'pinia', '@vueuse/core'],
        },
      },
    },
    chunkSizeWarningLimit: 2000,
  },
}, baseConfig)
