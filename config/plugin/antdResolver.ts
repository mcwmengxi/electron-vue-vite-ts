/**
 * 按需引入
 * 虽然项目中是全量引入组件，但此插件会默认使用。
 */
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

export default function configAntdResolverPlugin() {
  const antdResolverPlugin = Components({
    dirs: [], // Avoid parsing src/components.  避免解析到src/components
    deep: false,
    resolvers: [AntDesignVueResolver()],
  });
  return antdResolverPlugin;
}
