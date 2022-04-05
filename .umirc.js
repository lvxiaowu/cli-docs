export default {
  mode: 'site',
  title: '文档说明',
  logo: '/cli-docs/logo.png',
  favicon: '/cli-docs/logo.png',
  base: 'cli-docs',
  publicPath: '/cli-docs/',
  extraBabelPlugins: [
    ['import', { style: true, libraryName: 'antd', libraryDirectory: 'es' }, 'antd'],
  ],
  menus: {
    '/cli': [
      {
        title: '@lvxiaowu/cli',
        children: ['cli/index', 'cli/use'],
      },
      {
        title: '@lvxiaowu/admin',
        children: [
          'cli/admin',
          'cli/page-router',
          'cli/file-router',
          'cli/runtime',
          'cli/config',
          'cli/env',
          'cli/style',
          'cli/mobx',
          'cli/extra',
        ],
      },
    ],
    '/analysis': [
      {
        title: '介绍',
        children: [
          '/analysis/router',
          '/analysis/micro',
          '/analysis/mock',
          '/analysis/optimize',
          '/analysis/expand',
        ],
      },
    ],
  },
}
