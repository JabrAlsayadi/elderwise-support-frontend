const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const { defineConfig } = require('@vue/cli-service')
const { VantResolver } = require('unplugin-vue-components/resolvers');
const ComponentsPlugin = require('unplugin-vue-components/webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  chainWebpack:  config => {
    config.plugin('html').use(HtmlWebpackPlugin, [{
      chunksSortMode: 'none'
    }])
  
    if (process.env.VUE_APP_ENV === 'prod') {
      if (process.env.npm_config_report) {
        config.plugin('webpack-bundle-analyzer').use(BundleAnalyzerPlugin)
      }
    }
  },
  pages: {
    'm': {
      entry: 'src/page/main/main',
      template: 'public/main-index.html',
      filename: 'main-index.html',
      title: 'EWS Home',
      chunks: ['chunk-vendors', 'chunk-common', 'm']
    },
    'co': {
      entry: 'src/page/coMain/main',
      template: 'public/co-index.html',
      filename: 'co-index.html',
      title: 'EWS Mobile',
      chunks: ['chunk-vendors', 'chunk-common', 'co']
    },
    'prov': {
      entry: 'src/page/prov/main',
      template: 'public/prov-index.html',
      filename: 'prov-index.html',
      title: 'EWS Prov',
      chunks: ['chunk-vendors', 'chunk-common', 'prov']
    },
    'admin': {
      entry: 'src/page/admin/main',
      template: 'public/admin-index.html',
      filename: 'admin-index.html',
      title: 'EWS Admin',
      chunks: ['chunk-vendors', 'chunk-common', 'admin']
    },
  },
  css: {
    loaderOptions: {
      stylus: {
        webpackImporter: true
      }
    }
  },
  configureWebpack: {
    plugins: [
      ComponentsPlugin({
        resolvers: [VantResolver()],
      }),
    ],
  },
})