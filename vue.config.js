const path = require('path');
module.exports = {
  outputDir: './build',
  //配置别名1
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       components: '@/components'
  //     }
  //   }
  // }
  //配置别名2
  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     '@': path.resolve(__dirname, 'src'),
  //     components: '@/components'
  //   };
  // }
  //配置别名3
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src'))
      .set('components', '@/components');
  }
};
