const setupPlugins = require('./build/plugins');
const path = require('path');

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

module.exports = function () {
  return import('@unocss/webpack').then(({ default: UnoCSS }) => ({
    transpileDependencies: true,

    publicPath: BASE_URL,

    // 配置 public/index.html 的标题
    chainWebpack: config => {
      config.plugin('html').tap(args => {
        args[0].title = VUE_APP_TITLE;
        return args;
      });
      config.module.rule('vue').uses.delete('cache-loader');
      config.module.rule('tsx').uses.delete('cache-loader');
      config.merge({
        cache: false
      });
    },
    css: {
      extract:
        process.env.NODE_ENV === 'development'
          ? {
              filename: 'css/[name].css',
              chunkFilename: 'css/[name].css'
            }
          : true
    },
    configureWebpack: {
      devtool: 'inline-source-map',
      plugins: [...setupPlugins(), UnoCSS()],
      optimization: {
        realContentHash: true
      },
      resolve: {
        alias: {
          '@': resolve('src'),
          '~': resolve('/')
        }
      },
      devServer: {
        host: '0.0.0.0',
        port: 9528,
        open: true,
        proxy: {
          [VUE_APP_BASE_API]: {
            target: VUE_APP_API_URL,
            changeOrigin: true
          }
        }
      }
    }
  }));
};
