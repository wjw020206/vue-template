module.exports = function unplugin() {
  return [
    require('unplugin-auto-import/webpack').default({
      imports: ['vue', 'vue-router', 'pinia'],
      eslintrc: {
        enabled: true
      }
    })
  ];
};
