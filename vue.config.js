const { defineConfig } = require('@vue/cli-service');
const path = require('path');

/**
 * 获取当前目录的绝对路径
 * @param {string} dir 目录名
 * @returns {string} 绝对路径
 */
function resolve(dir) {
  return path.join(__dirname, dir);
}

const { VUE_APP_TITLE, VUE_APP_BASE_URL } = process.env;

module.exports = defineConfig({
  transpileDependencies: true,

  publicPath: VUE_APP_BASE_URL,

  // 配置 public/index.html 的标题
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = VUE_APP_TITLE;
      return args;
    });
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
        '~': resolve('/')
      }
    }
  }
});
