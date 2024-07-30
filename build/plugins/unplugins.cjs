const { FileSystemIconLoader } = require('unplugin-icons/loaders');

module.exports = function unplugin() {
  return [
    require('unplugin-auto-import/webpack').default({
      imports: ['vue', 'vue-router', 'pinia'],
      eslintrc: {
        enabled: true,
      },
      dts: 'src/typings/auto-imports.d.ts',
    }),
    require('unplugin-vue-components/webpack').default({
      dts: 'src/typings/components.d.ts',
      types: [
        {
          from: 'vue-router',
          names: ['RouterLink', 'RouterView'],
        },
      ],
      resolvers: [
        require('unplugin-icons/resolver').default({
          prefix: 'icon',
          customCollections: ['custom'],
        }),
      ],
    }),
    require('unplugin-icons/webpack').default({
      compiler: 'vue2',
      scale: 1,
      defaultClass: 'inline-block',
      autoInstall: true,
      customCollections: {
        custom: FileSystemIconLoader('src/icons/svg', (svg) =>
          svg.replace(/^<svg /, '<svg fill="currentColor" '),
        ),
      },
    }),
  ];
};
