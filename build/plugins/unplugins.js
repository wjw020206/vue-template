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
      dts: 'src/typings/components.d.ts'
    })
  ];
};
