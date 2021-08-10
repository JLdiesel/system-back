const path = require('path');
module.exports = {
  outputDir: './build',
  /*  devServer: {
    proxy: {
      '^/api': {
        target: 'http://152.136.185.210:5000',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  }, */
  // 配置别名1
  /* configureWebpack: {
    resolve: {
      alias: {
        components: '@/components',
        utils: '@/utils',
        service: '@/service'
      }
    }
  } */
  // 配置别名2
  /*  configureWebpack: (config) => {
    config.resolve.alias = {
      '@': path.resolve(__dirname, 'src'),
      components: '@/components'
    };
  } */
  //配置别名3
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src'))
      .set('components', '@/components')
      .set('utils', '@/utils')
      .set('service', '@/service')
      .set('assets', '@/assets');
  }
};
