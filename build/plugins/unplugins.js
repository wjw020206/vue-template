module.exports = function unplugin() {
  return [
    require('unplugin-auto-import/webpack').default({
      imports: ['vue', 'vue-router', 'pinia'],
      eslintrc: {
        enabled: true
      },
      dts: 'src/typings/auto-imports.d.ts'
    }),
    require('unplugin-vue-components/webpack').default({
      dts: 'src/typings/components.d.ts',
      types: [
        {
          from: 'vue-router',
          names: ['RouterLink', 'RouterView']
        }
      ],
      resolvers: [require('unplugin-icons/resolver')()]
    }),
    require('unplugin-icons/webpack')({
      compiler: 'vue2',
      scale: 1,
      defaultClass: 'inline-block',
      autoInstall: true
    })
  ];
};
