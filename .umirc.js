export default {
  mode: 'site',
  title: '闪电出行',
  logo: '/docs/logo.png',
  favicon: '/docs/logo.png',
  base: 'docs',
  publicPath: '/docs/',
  // publicPath:'./',
  extraBabelPlugins: [
    ['import', { style: true, libraryName: 'antd', libraryDirectory: 'es' }, 'antd'],
  ],
  menus: {
    '/cli': [
      {
        title: '脚手架cli',
        children: ['cli/index', 'cli/use'],
      },
      {
        title: '@sd/admin',
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
  },
}
