const path = require('node:path');
const { defineConfig } = require('@vue/cli-service');
const setupPlugins = require('./build/plugins/index.cjs');

/**
 * 获取当前目录的绝对路径
 * @param {string} dir 目录名
 * @returns {string} 绝对路径
 */
function resolve(dir) {
  return path.join(__dirname, dir);
}

const { VUE_APP_TITLE, VUE_APP_BASE_API, VUE_APP_API_URL, BASE_URL } =
  process.env;

module.exports = defineConfig({
  publicPath: BASE_URL,
  // 配置 public/index.html 的标题
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = VUE_APP_TITLE;
      return args;
    });
  },
  configureWebpack: {
    plugins: [...setupPlugins()],
    resolve: {
      alias: {
        '@': resolve('src'),
        '~': resolve('/'),
      },
    },
    devServer: {
      host: '0.0.0.0',
      port: 9528,
      open: true,
      proxy: {
        [VUE_APP_BASE_API]: {
          target: VUE_APP_API_URL,
          changeOrigin: true,
        },
      },
    },
  },
});
