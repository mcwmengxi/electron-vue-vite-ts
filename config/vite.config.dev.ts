import { mergeConfig } from 'vite'
import baseConfig from './vite.config.base';
import dns from 'dns';

// 禁用node对dsn解析地址结果进行默认排序行为
dns.setDefaultResultOrder('verbatim');
export default mergeConfig({
  mode: 'development',
  server: {
    open: false,
    fs: {
      strict: true,
    },
    port: 5137,
  },
  plugins: [],

}, baseConfig)
